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
        <br />
        <div>
          <h1>Latest work</h1>
        </div>
        <br />
        <Row>
          <Col  xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
            <YoutubeEmbed />
          </Col>
          <Col  className={styles.paragraph}  xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
            <h2>Andalucia</h2>
            <p>Instrumental Spanish guitar composition accompanied by strings</p>   
            <div>
              <Link href={"/music"}>ALL MUSIC RELEASES</Link>
            </div>       
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Music