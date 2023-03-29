import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/Footer'
import styles from '../styles/musicPage.module.css'
import oceo from '../public/img/oceo.png'

const music = () => {

  return (
    <div className={styles.container}>
      <Container>
        <br/>
        <h1>Music</h1>
        <br />
        <p>Album "Stories" is available in all streaming platforms</p>

        <Row>
          <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1}}>
            <div className={styles.iamge__container}>
              <Image src={oceo} alt="oceo music image" prop="fill" className={styles.image}/>
            </div> 
          </Col>
          <Col  xs={{span: 12, order: 2}} md={{span: 6, order: 2}} >
            <ListGroup className={styles.list_group}>
              <ListGroup.Item className={styles.list_item}>
                <Link href="https://open.spotify.com/artist/2dHUmER9ccna8XOPNwrGjd?si=efs30xDgTJGUjAk3hGdHow" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    Spotify
                  </a>
                </Link>
              </ListGroup.Item>              
              <ListGroup.Item className={styles.list_item}>
                <Link href="https://music.apple.com/us/album/stories/1471814005" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    iTunes
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_item}>
                <Link href="https://amazon.com/music/player/albums/B07TTYJ453?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_5Koahl7OW0F4oCygvYvidUQv9" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    Amazon
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_item}>
                <Link href="https://www.pandora.com/artist/oceo/AR4K2Zlcmw7qXv9" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    Pandora
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_item}>
                <Link href="https://play.anghami.com/artist/3886441?adj_t=dgl0aa8_64v1dnl&adj_campaign=web&adj_adgroup=artist&adj_creative=undefined" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    Anghami
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_item}>
                <Link href="https://www.youtube.com/@oceo/videos" passHref legacyBehavior>
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