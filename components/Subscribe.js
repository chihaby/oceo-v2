import { useState } from "react";
import axios from "axios";
import styles from '../styles/Subscribe.module.css'

function Subscribe () {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div >
      <p>
        Subscribe and get discounts, new releases, 
      </p>
      <div>
        <input
          style={{width: '250px'}}
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <button
          className={`${styles.subscribe} ${
            state === "LOADING" ? "button-gradient-loading" : ""
          }`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Subscribe
        </button>
      </div>
      {state === "ERROR" && (
        <p>{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p>Success!</p>
      )}
    </div>
  );
};

export default Subscribe;