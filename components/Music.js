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
            <h2>Andalusia</h2>
            <p >Is the most intimate song I have ever written. Originally it was accompanied by a string section. I have achieved perfect harmony between strings and guitar in the past, but this time something was different as if the guitar wanted to be alone. So I rerecorded the piece with a deep emphasis on the feeling and gave much attention to the performance without incorporating other instruments like strings, bass, percussion, etc. The song sounded full, expressive, and storytelling. I did not want to lose any of these elements. So I left it alone. I hope it communicates to you the same way it comminicates me. Enjoy and thank you for listening.</p>   
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