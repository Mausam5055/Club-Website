import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// Cache the auth client
let cachedAuth: any = null;
let cachedSheets: any = null;

const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
const RANGE = 'Sheet1!A:D';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, regNumber, timestamp, status } = body;

    if (!name || !regNumber || !timestamp || !status) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Use cached auth client or create new one
    if (!cachedAuth) {
      cachedAuth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.split('\\n').join('\n')
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
      });
      cachedSheets = google.sheets({ version: 'v4', auth: cachedAuth });
    }

    // First, get existing entries
    const existingData = await cachedSheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: RANGE,
    });

    const rows = existingData.data.values || [];
    
    // Check if this registration number already exists
    const isDuplicate = rows.some((row: string[]) => row[1] === regNumber);
    
    if (isDuplicate) {
      return NextResponse.json({ 
        error: 'Already entered',
        status: 'DUPLICATE'
      }, { status: 409 });
    }

    // If not duplicate, append new entry
    const response = await cachedSheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, regNumber, timestamp, status]]
      }
    });

    return NextResponse.json({ 
      success: true,
      status: 'ADDED'
    });

  } catch (error: any) {
    console.error('Sheet update error:', error?.message || error);
    return NextResponse.json({ error: 'Failed to update sheet' }, { status: 500 });
  }
}
