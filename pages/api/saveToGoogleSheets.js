import { google } from "googleapis";
// import credentials from "../../private/gkey.json";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  async function getLocation() {
    try {
      const response = await axios.get(
        `https://ipinfo.io/json?token=${process.env.IPINFO_TOKEN}`
      );
      return response.data; // This will return the location data
    } catch (error) {
      console.error("Error fetching location data:", error);
      return null; // Return null in case of an error
    }
  }

  const { email } = req.body;
  const timestamp = new Date().toLocaleString(); // For human-readable date-time format
  const SHEET_ID = process.env.GOOGLE_SHEET_ID;
  // const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
  const location = await getLocation();
  const locationData = location
    ? location.city + ", " + location.country
    : "Unknown"; // Location info

  try {
    // console.log("Authenticating with Google Sheets API...");
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:A",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [[email, locationData, timestamp]] },
    });

    res.status(200).json({ message: "Email saved to Google Sheets" });
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    res.status(500).json({ error: error.message });
  }
}
