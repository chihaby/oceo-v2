import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Link from "next/link";
// import styles from "../styles/Tabs.module.css";
import { useState } from "react";

const Tabs = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);

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

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage(
          "Thank you for signing up! Your guitar tabs are on their way to your inbox.\n Be sure to check your spam/junk folder for the download link. Happy playing!"
        );
      } else {
        alert("Error sending email: " + data.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false); // Hide spinner when done
    }
  };

  return (
    <Container>
      <br />
      <h1>Tabs</h1>
      <br />
      <div>
        {"Get Evora guitar tabs"} 🎸 <br />
        {
          "Enter your email below, and you will receive a download link to your inbox"
        }
        <br />
        {"Plus, you will get updates on new music, lessons, and much more."}
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
        <button type="submit" disabled={loading}>
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      <div>
        {loading && <div className="spinner"></div>}

        {message && <p>{message}</p>}

        <style jsx>{`
          .spinner {
            width: 30px;
            height: 30px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </Container>
  );
};

export default Tabs;
