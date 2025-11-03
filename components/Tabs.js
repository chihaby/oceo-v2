import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Link from "next/link";
// import styles from "../styles/Tabs.module.css";
import { useState } from "react";

const Tabs = (downloadUrl) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);

    const locationData = await getClientLocation();
    // Save to Google Sheets
    await fetch("/api/saveToGoogleSheets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, location: locationData }),
    });

    // Save to Mailchimp
    await fetch("/api/saveToMailchimp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    try {
      // Get client's location data
      const locationData = await getClientLocation();

      // Send to your API
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, location: locationData }),
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

    async function getClientLocation() {
      try {
        console.log("Fetching location from ipapi.co...");
        const response = await fetch("https://ipapi.co/json/");

        if (!response.ok) {
          console.error("Location API error:", response.status);
          throw new Error("Location fetch failed");
        }

        const data = await response.json();
        console.log("Location data received:", data);

        return {
          city: data.city || "Unknown",
          region: data.region || "Unknown",
          country: data.country_name || "Unknown",
          countryCode: data.country_code || "Unknown",
          ip: data.ip || "Unknown",
        };
      } catch (error) {
        console.error("Error fetching location:", error);
        return {
          city: "Unknown",
          region: "Unknown",
          country: "Unknown",
          countryCode: "Unknown",
          ip: "Unknown",
        };
      }
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
          {loading ? "Subscribing..." : "Get Tabs"}
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
