import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import YoutubeEmbed from '@/components/YoutubeEmbed'
import Footer from '../components/Footer'

const services = () => {
  return (
    <div>
      <Container>
        <br />
          <h1>Services</h1>
        <br />
        <Row>
          <Col>
            <p>I can play solo guitar for your private event in the Bay Area, California
              <Link href={'/contact'}>{" Contact Me"}</Link> 
            </p>
            <YoutubeEmbed />     
          </Col>
          <Col>
            <p>I provid one to one online classes via Zoom
              <Link href={'/contact'}>{" Contact Me"}</Link> 
            </p>
            <YoutubeEmbed />    
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default services