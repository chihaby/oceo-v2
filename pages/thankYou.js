import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

function ThankYou() {
  return (
    <>
      <Container>
        <br />
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <h2>Thank You</h2>
            <br />
            <p>
              Thank you for contacting me. I will review your message and get
              back to you as soon as possible.
            </p>
            <p>
              <em>Oceo</em>
            </p>
            <Link href="/">Return to Home page</Link>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    </>
  );
}

export default ThankYou;
