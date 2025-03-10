import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import styles from "../styles/Tabs.module.css";
import { useState } from "react";

const Tabs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    // Save to Google Sheets
    await fetch("/api/saveToGoogleSheets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    // Save to Mailchimp
    await fetch("/api/saveToMailchimp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    // Send Email with PDF Link
    // await fetch("/api/sendEmail", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email }),
    // });

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage(
          "Thank you for signing up! Your guitar tabs are on their way to your inbox. Be sure to check your spam/junk folder for the download link. Happy playing!"
        );
      } else {
        alert("Error sending email: " + data.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <Container>
      <br />
      <h1>Tabs</h1>
      <br />
      <div>
        Get <b>Evora</b> guitar tabs 🎸 <br />
        Enter your email below, and you will receive your download file via
        email.
        <br />
        Plus, you'll get updates on new music, lessons, and much more.
      </div>
      <br />
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        {message && <p>{message}</p>}
      </form>
    </Container>
  );
};

export default Tabs;
