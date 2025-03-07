import { google } from "googleapis";
import credentials from "../../credentials/oceoCredentials.json";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;
  const SHEET_ID = process.env.GOOGLE_SHEET_ID;

  try {
    console.log("Authenticating with Google Sheets API...");
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:A",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [[email]] },
    });

    res.status(200).json({ message: "Email saved to Google Sheets" });
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    res.status(500).json({ error: error.message });
  }
}
