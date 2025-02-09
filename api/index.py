from fastapi import FastAPI, HTTPException, Form, Request
import json
import qrcode
from fastapi.middleware.cors import CORSMiddleware
import hashlib
import os
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont
from fastapi.responses import FileResponse, StreamingResponse  # Add this import
import base64
import datetime

# Define paths first
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CERTIFICATE_DATA_FILE = os.path.join(BASE_DIR, "assets", "data2.json")
TICKET_DATA_FILE = os.path.join(BASE_DIR, "assets", "data-tickets.json")
TEMPLATE_PATH = os.path.join(BASE_DIR, "assets", "event.png")
CERTIFICATE_TEMPLATE_PATH = os.path.join(BASE_DIR, "assets", "certificate.png")
FONT_PATH = os.path.join(BASE_DIR, "assets", "arial.ttf")

# Initialize FastAPI app and middleware
app = FastAPI()
origins = [
    "http://localhost:3000",  # Allow frontend to access API on this URL
    "http://localhost",
    "https://linpack.vercel.app",  # For localhost access
    "https://linpack.vercel.app"  # Add your Vercel domain
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,   # Allow frontend URL to access API
    allow_credentials=True,
    allow_methods=["*"],     # Allow all HTTP methods
    allow_headers=["*"],     # Allow all headers
)

# Global variables to store data
CERTIFICATE_USERS_DATA = []
TICKET_USERS_DATA = []

# Load data function
def load_data():
    global CERTIFICATE_USERS_DATA, TICKET_USERS_DATA
    try:
        if os.path.exists(CERTIFICATE_DATA_FILE):
            with open(CERTIFICATE_DATA_FILE, "r") as file:
                CERTIFICATE_USERS_DATA = json.load(file)
        
        if os.path.exists(TICKET_DATA_FILE):
            with open(TICKET_DATA_FILE, "r") as file:
                TICKET_USERS_DATA = json.load(file)
                
        return True
    except Exception as e:
        print(f"Error loading data: {str(e)}")
        return False

# Try to load data on startup
load_data()

@app.middleware("http")
async def log_requests(request: Request, call_next):
    print(f"Request path: {request.url.path}")
    print(f"Request method: {request.method}")
    try:
        response = await call_next(request)
        print(f"Response status: {response.status_code}")
        return response
    except Exception as e:
        print(f"Error: {str(e)}")
        raise

@app.get("/api/py/health")
async def health_check():
    """Check API and data file health"""
    health_status = {
        "status": "ok",
        "timestamp": datetime.datetime.now().isoformat(),
        "files": {},
        "data": {
            "certificate_users": len(CERTIFICATE_USERS_DATA),
            "ticket_users": len(TICKET_USERS_DATA)
        }
    }

    try:
        # Check files existence first
        files_to_check = {
            "certificate_data": CERTIFICATE_DATA_FILE,
            "ticket_data": TICKET_DATA_FILE,
            "certificate_template": CERTIFICATE_TEMPLATE_PATH,
            "ticket_template": TEMPLATE_PATH,
            "font": FONT_PATH
        }

        for name, filepath in files_to_check.items():
            exists = os.path.exists(filepath)
            health_status["files"][name] = {
                "exists": exists,
                "path": filepath
            }
            if not exists:
                health_status["status"] = "degraded"

        return health_status

    except Exception as e:
        print(f"Health check error: {str(e)}")
        return {
            "status": "error",
            "timestamp": datetime.datetime.now().isoformat(),
            "message": [f"Health check failed: {str(e)}"],
            "files": health_status["files"]
        }

def normalize_name(name):
    """Helper function to normalize names for comparison"""
    return ''.join(name.lower().split())

@app.get("/api/py/get-valid-names")
async def get_valid_names():
    """Return all valid names from both databases"""
    try:
        certificate_names = [user["name"] for user in CERTIFICATE_USERS_DATA]
        ticket_names = [user["name"] for user in TICKET_USERS_DATA]
        all_names = list(set(certificate_names + ticket_names))  # Remove duplicates
        return {"names": sorted(all_names)}
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch names: {str(e)}"
        )

@app.post("/api/py/generate-ticket")
async def generate_ticket(name: str = Form(...), reg_no: str = Form(...)):
    print(f"Received input: name='{name}', reg_no='{reg_no}'")
    
    # Find the user in ticket database
    matching_user = None
    valid_names = []
    
    for user in TICKET_USERS_DATA:
        valid_names.append(user["name"])
        if user["reg_number"].strip() == reg_no.strip():
            normalized_stored_name = normalize_name(user["name"])
            if normalize_name(name) == normalized_stored_name:
                matching_user = user
                break
    
    if not matching_user:
        print("User not found!")
        raise HTTPException(
            status_code=404, 
            detail="No User Found"  # Simplified error message
        )

    # Use stored name from database
    stored_name = matching_user["name"]
    stored_reg_no = matching_user["reg_number"]
    print(f"Using stored name: {stored_name}")

    # Use the hash field name that matches the JSON structure
    hashed_data = matching_user["hashed_code"]  # Changed from event_ticket_hash to hashed_code
    print(f"Using stored hash: {hashed_data}")

    qr = qrcode.make(hashed_data)
    qr = qr.resize((300, 300))
    print("QR Code generated!")

    # Load ticket template
    if not os.path.exists(TEMPLATE_PATH):
        raise FileNotFoundError("Error: ticket.png template not found!")
    ticket = Image.open(TEMPLATE_PATH)
    print("Ticket template loaded!")

    # Paste QR Code at specified position
    qr_code_position = (1550, 150)  # (x, y)
    ticket.paste(qr, qr_code_position)
    print("QR Code pasted!")

    # Draw text
    draw = ImageDraw.Draw(ticket)
    try:
        font = ImageFont.truetype(FONT_PATH, 50)  # Adjust font size as needed
    except IOError:
        print("Warning: Font not found! Using default font.")
        font = ImageFont.load_default()
    print("Font loaded!")

    # Name and Reg Number positions
    name_position = (1220, 430)  
    reg_number_position = (1550, 540)  

    draw.text(name_position, f"{stored_name}", font=font, fill="White")
    draw.text(reg_number_position, f"{stored_reg_no}", font=font, fill="black")
    print("Text drawn!")

    # Generate ticket in memory only
    img_byte_arr = BytesIO()
    ticket.save(img_byte_arr, format='PNG')
    img_byte_arr.seek(0)

    return StreamingResponse(
        img_byte_arr,
        media_type="image/png",
        headers={
            'Content-Disposition': f'attachment; filename="{stored_reg_no}_ticket.png"'
        }
    )

@app.post("/api/py/generate-certificate")
async def generate_certificate(name: str = Form(...)):
    print(f"Received input: name='{name}'")
    
    # Normalize the input name
    normalized_input_name = normalize_name(name)
    
    # Find the user in certificate database
    matching_user = None
    valid_names = []
    
    for user in CERTIFICATE_USERS_DATA:
        valid_names.append(user["name"])
        normalized_stored_name = normalize_name(user["name"])
        if normalize_name(name) == normalized_stored_name:
            matching_user = user
            break
    
    if not matching_user:
        print("User not found!")
        raise HTTPException(
            status_code=404, 
            detail="No User Found"  # Simplified error message
        )

    # Use the stored name from JSON instead of input name
    stored_name = matching_user["name"]
    print(f"Using stored name: {stored_name}")

    hashed_data = matching_user["certificate_hash"]
    print(f"Using stored hash: {hashed_data}")

    qr = qrcode.make(hashed_data)
    qr = qr.resize((200, 200))
    print("QR Code generated!")

    if not os.path.exists(CERTIFICATE_TEMPLATE_PATH):
        raise FileNotFoundError("Error: certificate template not found!")

    certificate = Image.open(CERTIFICATE_TEMPLATE_PATH)
    print("Certificate template loaded!")

    qr_code_position = (1650, 1100)  # (x, y)
    certificate.paste(qr, qr_code_position)
    print("QR Code pasted!")

    draw = ImageDraw.Draw(certificate)
    try:
        font = ImageFont.truetype(FONT_PATH, 75)  # Adjust font size as needed
    except IOError:
        print("Warning: Font not found! Using default font.")
        font = ImageFont.load_default()
    print("Font loaded!")

    # Name position only (removing reg_no)
    name_position = (600, 550)  
    draw.text(name_position, f"{stored_name}", font=font, fill="Brown")
    print("Name drawn!")

    # Generate certificate in memory only
    img_byte_arr = BytesIO()
    certificate.save(img_byte_arr, format='PNG')
    img_byte_arr.seek(0)

    return StreamingResponse(
        img_byte_arr,
        media_type="image/png",
        headers={
            'Content-Disposition': f'attachment; filename="{stored_name}_certificate.png"'
        }
    )
