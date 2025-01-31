from fastapi import FastAPI, HTTPException, Form
import json
import qrcode
from fastapi.middleware.cors import CORSMiddleware
import hashlib
import os
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont
from fastapi.responses import FileResponse

app = FastAPI()
origins = [
    "http://localhost:3000",  # Allow frontend to access API on this URL
    "http://localhost",
    "https://linpack.vercel.app"# For localhost access
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,   # Allow frontend URL to access API
    allow_credentials=True,
    allow_methods=["*"],     # Allow all HTTP methods
    allow_headers=["*"],     # Allow all headers
)

# Load User Data
DATA_FILE = "./data.json"
if not os.path.exists(DATA_FILE):
    raise FileNotFoundError("Error: data.json not found!")

with open(DATA_FILE, "r") as file:
    USERS_DATA = json.load(file)
print("Loaded user data:", USERS_DATA)  # Debugging

# Paths
TEMPLATE_PATH = "./event.png"
FONT_PATH = "./arial.ttf"

# Ensure tickets directory exists
os.makedirs("tickets", exist_ok=True)

@app.post("/api/generate-ticket")
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
    hashed_data = hashlib.sha256(data.encode()).hexdigest()
    
    qr = qrcode.make(hashed_data)
    qr = qr.resize((300, 300))  # Resize QR code

    # Load ticket template
    if not os.path.exists(TEMPLATE_PATH):
        raise FileNotFoundError("Error: ticket.png template not found!")
    ticket = Image.open(TEMPLATE_PATH)

    # Paste QR Code at specified position
    qr_code_position = (1550, 150)  # (x, y)
    ticket.paste(qr, qr_code_position)

    # Draw text
    draw = ImageDraw.Draw(ticket)
    try:
        font = ImageFont.truetype(FONT_PATH, 50)  # Adjust font size as needed
    except IOError:
        print("Warning: Font not found! Using default font.")
        font = ImageFont.load_default()

    # Name and Reg Number positions
    name_position = (1220, 430)  
    reg_number_position = (1550, 540)  

    draw.text(name_position, f"{name}", font=font, fill="White")
    draw.text(reg_number_position, f"{reg_no}", font=font, fill="black")

    # Save ticket
    ticket_path = f"tickets/{reg_no}_ticket.png"
    ticket.save(ticket_path)
    print(f"Ticket saved at {ticket_path}")

    return {"download_url": f"/api/download-ticket/{reg_no}"}

@app.get("/api/download-ticket/{reg_no}")
def download_ticket(reg_no: str):
    ticket_path = f"tickets/{reg_no}_ticket.png"
    if not os.path.exists(ticket_path):
        raise HTTPException(status_code=404, detail="Ticket not found")
    return FileResponse(ticket_path, media_type="image/png", filename=f"{reg_no}_ticket.png")
