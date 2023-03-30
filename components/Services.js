import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import styles from '../styles/Services.module.css'

const Services = () => {
  return (
    <div>
      <Container>
        <div>
          <br />
          <h1>Services</h1>
          <br />
          <p>In addition to my music writing, I provide various other services that may interest you. If you need any of these services, feel free to contact me.</p>
          <br />
        </div>
        <Row >  
          <Col>
            <Link href="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Card className={styles.services}>
                <Card.Body>
                <Card.Title>Private Events</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Local</Card.Subtitle>
                  <Card.Text>
                    For events in the San Francisco Bay Area please provide event type
                    Weddings, ceremonies, private party. Event day, time and location 
                  </Card.Text>
                  <Link href={'/contact'}>GET IN TOUCH</Link>
                </Card.Body>
              </Card>
            </Link>
          </Col>          
          <Col>
            <Link href="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Card className={styles.services}>
                <Card.Body>
                  <Card.Title>Guitar Lessons</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Online</Card.Subtitle>
                  <Card.Text>
                    One to one online guitar courses via Zoom or Skype. Sessions are 30 min long and price is $50.
                    Please contact me prior to scheduling.
                  </Card.Text>
                  <Link href={'/contact'}>GET IN TOUCH</Link>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          {/* <Col>
            <a href="/contact">
              <Card style={{ width: '16rem' }}>
                <Card.Body>
                  <Card.Title>Musical Collaborations</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    If you have a musical project and need a solo or chord progression played with spanish guitar in the flamenco style. Please 
                  </Card.Text>
                  <Link href={'/contact'}>GET IN TOUCH</Link>
                </Card.Body>
              </Card>
            </a>
          </Col> */}
          <Col >
            <Link href="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Card className={styles.services}>
                <Card.Body>
                  <Card.Title>Apperance and Interviews</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Local & Online</Card.Subtitle>
                  <Card.Text>
                    Interviews are free of charge. Please provide a link to your poscast, radio station, or YouTube channel in the contact form.
                  </Card.Text>
                  <Link href={'/contact'}>GET IN TOUCH</Link>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
        <br /><br />
      </Container>
    </div>
  )
}

export default Services