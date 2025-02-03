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
    try:
        # Try to load user data to verify everything is working
        if os.path.exists(DATA_FILE):
            with open(DATA_FILE, "r") as file:
                json.load(file)
            return {
                "status": "ok",
                "message": "API is healthy and data file is accessible",
                "timestamp": datetime.datetime.now().isoformat()
            }
        else:
            return {
                "status": "degraded",
                "message": "API is running but data file is not accessible",
                "timestamp": datetime.datetime.now().isoformat()
            }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Health check failed: {str(e)}"
        )

# Update paths to use correct asset paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "..", "data.json")
TEMPLATE_PATH = os.path.join(BASE_DIR, "assets", "event.png")
FONT_PATH = os.path.join(BASE_DIR, "assets", "arial.ttf")

# Load User Data
if not os.path.exists(DATA_FILE):
    raise FileNotFoundError("Error: data.json not found!")

with open(DATA_FILE, "r") as file:
    USERS_DATA = json.load(file)
print("Loaded user data:", USERS_DATA)  # Debugging

@app.post("/api/py/generate-ticket")
async def generate_ticket(name: str = Form(...), reg_no: str = Form(...)):
    print(f"Received input: name='{name}', reg_no='{reg_no}'")
    
    # Find the user and their hash from USERS_DATA
    matching_user = None
    for user in USERS_DATA:
        if (user["name"].strip().lower() == name.strip().lower() and 
            user["reg_number"].strip() == reg_no.strip()):
            matching_user = user
            break
    
    if not matching_user:
        print("User not found!")
        raise HTTPException(status_code=404, detail="User not found")

    # Use the pre-computed hash from data.json
    hashed_data = matching_user["hashed_code"]
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

    draw.text(name_position, f"{name}", font=font, fill="White")
    draw.text(reg_number_position, f"{reg_no}", font=font, fill="black")
    print("Text drawn!")

    # Generate ticket in memory only
    img_byte_arr = BytesIO()
    ticket.save(img_byte_arr, format='PNG')
    img_byte_arr.seek(0)

    return StreamingResponse(
        img_byte_arr,
        media_type="image/png",
        headers={
            'Content-Disposition': f'attachment; filename="{reg_no}_ticket.png"'
        }
    )