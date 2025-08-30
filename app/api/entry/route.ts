import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import ticketData from '@/api/assets/data-tickets.json';

// Cache the auth client
let cachedAuth: any = null;
let cachedSheets: any = null;

const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
// Updated range to include all columns (now 6 columns: team_id, name, regNumber, Games, timestamp, status)
const RANGE = 'Sheet1!A2:F';

// Add cell formatting constants
const DEFAULT_FORMAT = {
  "horizontalAlignment": "CENTER",
  "verticalAlignment": "MIDDLE",
  "textFormat": {
    "fontSize": 12
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, regNumber, timestamp, status } = body;

    if (!name || !regNumber || !timestamp || !status) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Find the ticket data to get team_id and Games
    const ticketInfo = ticketData.find(ticket => ticket.reg_number === regNumber);
    
    if (!ticketInfo) {
      return NextResponse.json({ error: 'Invalid registration number' }, { status: 400 });
    }

    // Get all team members with same team_id
    const teamMembers = ticketData.filter(ticket => 
      ticket.team_id === ticketInfo.team_id && 
      ticket.reg_number !== regNumber
    );

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
      range: 'Sheet1!A2:F',
    });

    const rows = existingData.data.values || [];
    
    // Check if this registration number already exists (now checking in the correct column)
    const isDuplicate = rows.some((row: string[]) => row[2] === regNumber);
    
    if (isDuplicate) {
      return NextResponse.json({ 
        error: 'Already entered',
        status: 'DUPLICATE'
      }, { status: 409 });
    }

    // Prepare entries for all team members
    const entries = [
      [ticketInfo.team_id, name, regNumber, ticketInfo.Games, timestamp, status],
      ...teamMembers.map(member => [
        member.team_id,
        member.name,
        member.reg_number,
        member.Games,
        timestamp,
        status
      ])
    ];

    // Append entries
    const appendResponse = await cachedSheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: entries
      }
    });

    // Get the range of newly added rows
    const updateRange = appendResponse.data.updates.updatedRange;
    const [startCell, endCell] = updateRange.split('!')[1].split(':');
    
    // Apply formatting to the new rows
    await cachedSheets.spreadsheets.batchUpdate({
      spreadsheetId: SHEET_ID,
      requestBody: {
        requests: [{
          repeatCell: {
            range: {
              sheetId: 0, // Assuming it's the first sheet
              startRowIndex: parseInt(startCell.match(/\d+/)[0]) - 1,
              endRowIndex: parseInt(endCell.match(/\d+/)[0]),
              startColumnIndex: 0,
              endColumnIndex: 6
            },
            cell: {
              userEnteredFormat: DEFAULT_FORMAT
            },
            fields: "userEnteredFormat(horizontalAlignment,verticalAlignment,textFormat)"
          }
        }]
      }
    });

    return NextResponse.json({ 
      success: true,
      status: 'ADDED',
      teamMembersAdded: teamMembers.length
    });

  } catch (error: any) {
    console.error('Sheet update error:', error?.message || error);
    return NextResponse.json({ error: 'Failed to update sheet' }, { status: 500 });
  }
}
