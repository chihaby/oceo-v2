import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const { token } = req.query;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get file path
    const filePath = path.resolve("./private/tablatures/evora.pdf");

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found" });
    }

    // Send file as a response
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=evora.pdf");

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error("Download error:", error);
    res.status(401).json({ error: "Unauthorized or expired token" });
  }
}
