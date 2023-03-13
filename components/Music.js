import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import styles from '../styles/Music.module.css'
import YoutubeEmbed from "./YoutubeEmbed";

const Music = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <h1>Latest work</h1>
          <Col>
            <p>This is my latest work</p>          
          </Col>
          <Col>
            <YoutubeEmbed />
          </Col>
        </Row>
        <div>
          <Link href={"/music"}>ALL MUSIC RELEASES</Link>
        </div>
      </Container>
    </div>
  )
}

export default Music