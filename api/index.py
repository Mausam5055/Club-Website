from fastapi import FastAPI, HTTPException, Form
import json
import qrcode
from fastapi.middleware.cors import CORSMiddleware
import hashlib
import os
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont
from fastapi.responses import FileResponse, StreamingResponse  # Add this import
import base64

app = FastAPI()
origins = [
    "http://localhost:3000",  # Allow frontend to access API on this URL
    "http://localhost",
    "https://linpack.vercel.app",  # For localhost access
     # Add your Vercel domain
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,   # Allow frontend URL to access API
    allow_credentials=True,
    allow_methods=["*"],     # Allow all HTTP methods
    allow_headers=["*"],     # Allow all headers
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
    user_valid = any(
        user["name"].strip().lower() == name.strip().lower() and 
        user["reg_number"].strip() == reg_no.strip()
        for user in USERS_DATA
    )
    if not user_valid:
        print("User not found!")  # Debugging
        raise HTTPException(status_code=404, detail="User not found")

    # Generate unique hashed QR code
    data = f"{name.strip()}-{reg_no.strip()}"
    print(data)
    hashed_data = hashlib.sha256(data.encode()).hexdigest()
    print(hashed_data)

    qr = qrcode.make(hashed_data)
    qr = qr.resize((300, 300))  # Resize QR code
    print("QR Code generated!")  # Debugging

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