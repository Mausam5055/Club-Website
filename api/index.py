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

# CORS Configuration
origins = [
    "http://localhost:3000",  # Allow frontend access
    "http://localhost",
    "https://linpack.vercel.app"  # Deployment URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load User Data
DATA_FILE = "./data.json"
if not os.path.exists(DATA_FILE):
    raise FileNotFoundError("Error: data.json not found!")

with open(DATA_FILE, "r", encoding="utf-8") as file:
    USERS_DATA = json.load(file)

print("Loaded user data successfully.")  # Debugging

# Paths
TEMPLATE_PATH = "./event.png"
FONT_PATH = "./arial.ttf"

# Ensure tickets directory exists
os.makedirs("tickets", exist_ok=True)

@app.post("/api/py/generate-ticket")
async def generate_ticket(name: str = Form(...), reg_no: str = Form(...)):
    print(f"Received input: name='{name}', reg_no='{reg_no}'")
    user_valid = any(
        user["name"].strip() == name.strip() and 
        user["reg_number"].strip() == reg_no.strip()
        for user in USERS_DATA
    )
    if not user_valid:
        print("User not found!") 
        raise HTTPException(status_code=404, detail="User not found")
    data = f"{name.strip()}-{reg_no.strip()}"
    hashed_data = hashlib.sha256(data.encode()).hexdigest()
    print("Generated hash:", hashed_data)
    
    qr = qrcode.make(hashed_data)
    qr = qr.resize((300, 300)) 
    print("QR Code generated!")  

    # Load ticket template
    if not os.path.exists(TEMPLATE_PATH):
        raise HTTPException(status_code=500, detail="Ticket template (event.png) not found!")
    
    ticket = Image.open(TEMPLATE_PATH)
    print("Ticket template loaded!")

    qr_code_position = (1550, 150)  # (x, y)
    ticket.paste(qr, qr_code_position)
    print("QR Code pasted!")

    draw = ImageDraw.Draw(ticket)
    try:
        font = ImageFont.truetype(FONT_PATH, 30)  
    except IOError:
        print("Warning: Font not found! Using default font.")
        font = ImageFont.load_default()
    print("Font loaded!")

    name_position = (1220, 430)  
    reg_number_position = (1550, 540)  

    draw.text(name_position, f"{name}", font=font, fill="White")
    draw.text(reg_number_position, f"{reg_no}", font=font, fill="black")
    print("Text drawn on ticket!")

    ticket_path = f"tickets/{reg_no}_ticket.png"
    ticket.save(ticket_path, format="PNG")
    print(f"Ticket saved at {ticket_path}")

    return FileResponse(ticket_path, media_type="image/png", filename=f"{reg_no}_ticket.png")


@app.get("/api/py/download-ticket/{reg_no}")
def download_ticket(reg_no: str):
    ticket_path = f"tickets/{reg_no}_ticket.png"
    if not os.path.exists(ticket_path):
        raise HTTPException(status_code=404, detail="Ticket not found")
    
    return FileResponse(ticket_path, media_type="image/png", filename=f"{reg_no}_ticket.png")
