import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Link from 'next/link'
import Footer from '../components/Footer'
import styles from '../styles/musicPage.module.css'

const music = () => {

  return (
    <div className={styles.container}>
      <Container>
        <br/>
        <h1>Music</h1>
        <br />
        <Row>
          <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1}}>
            Links to streaming platforms
          </Col>
          <Col  xs={{span: 12, order: 2}} md={{span: 6, order: 2}}>
            <ListGroup >
            <ListGroup.Item className={styles.li}>
                <Link href="https://open.spotify.com/artist/2dHUmER9ccna8XOPNwrGjd?si=efs30xDgTJGUjAk3hGdHow" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    Spotify
                  </a>
                </Link>
              </ListGroup.Item>              
              <ListGroup.Item className={styles.li}>
                <Link href="https://music.apple.com/us/album/stories/1471814005" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    iTunes
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.li}>
                <Link href="https://amazon.com/music/player/albums/B07TTYJ453?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_5Koahl7OW0F4oCygvYvidUQv9" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    Amazon
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.li}>
                <Link href="https://www.pandora.com/artist/oceo/AR4K2Zlcmw7qXv9" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    Pandora
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.li}>
                <Link href="https://play.anghami.com/artist/3886441?adj_t=dgl0aa8_64v1dnl&adj_campaign=web&adj_adgroup=artist&adj_creative=undefined" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    Anghami
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.li}>
                <Link href="https://www.youtube.com/@oceo/videos" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default music