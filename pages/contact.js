import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/contactPage.module.css";
import emailjs from "@emailjs/browser";
import Spinner from "react-bootstrap/Spinner";
// import Link from 'next/link';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "@/components/Footer";

const Contact = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFullNameInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      fullName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleMessageInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      message: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.fullName && values.email && values.message) {
      setValid(true);
    }
    setSubmitted(true);
    sendEmail();
  };

  const sendEmail = () => {
    const templateParams = {
      name: values.fullName,
      email: values.email,
      message: values.message,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_USER_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    resetInputValues();
  };

  const resetInputValues = () => {
    setValues((values) => ({
      ...values,
      fullName: "",
    }));
    setValues((values) => ({
      ...values,
      email: "",
    }));
    setValues((values) => ({
      ...values,
      message: "",
    }));
    routeToThankYouPage();
  };

  const router = useRouter();

  const routeToThankYouPage = () => {
    // e.preventDefault();
    setSubmitted(!submitted);
    setTimeout(() => {
      redirectToThankYouPage();
    }, 600);
  };

  const redirectToThankYouPage = () => {
    router.push("/thankYou");
  };

  return (
    <div className={styles.container}>
      <Container>
        <br />
        <h1>Contact</h1>
        <Row>
          <Col>
            <br />
            <p className={styles.paragraph}>
              Please fill out the form below and I will reach back to you as
              soon as possible.
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <span>Name</span>
              <br />
              <input
                className={styles.form_input}
                type="text"
                id="name"
                placeholder="Your name"
                required
                value={values.fullName}
                onChange={handleFullNameInputChange}
              />
              {submitted && !values.fullName && (
                <span id="first-name-error">Please enter your full name</span>
              )}
              <br />
              <br />
              <span>Email</span>
              <br />
              <input
                className={styles.form_input}
                type="email"
                id="email"
                placeholder="Your email"
                required
                value={values.email}
                onChange={handleEmailInputChange}
              />
              <br />
              <br />
              <span>Message</span>
              <br />
              <textarea
                className={styles.form_message}
                type="text"
                id="message"
                placeholder="Message"
                required
                value={values.message}
                onChange={handleMessageInputChange}
              />
              <br />
              <br />
              <button
                type="subit"
                id="btnsubmit"
                className={styles.form_submit}
              >
                {" "}
                SUBMIT
              </button>
              {submitted && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden"></span>
                </Spinner>
              )}
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
