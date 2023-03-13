import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import logo from '../public/img/logo.png'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div>
      <Container>
        <div>
          <h1>About Me</h1>
        </div>
        <Row>        
          <Col  xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
            <div className={styles.iamge__container}>
              <Image src={logo} alt="about oceo guitar player" prop="fill" className={styles.image}/>
            </div>
          </Col>
          <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
            <p>oceo evora. Born in Casablanca, Morocco. Oceo grew up in a lively and vibrant music culture. The incredible passion and joy of the Mediterranean music of Morocco is a fusion of Arabic, Spanish, French and Greek musical influences fueled by centuries of trade between the Mediterranean’s dynamic and rich cultures. The North African music scene is inseparable from its Mediterranean neighbors from whom it shares a rich history of melodic decadence. Oceo heard the rhythms and beats that would be a soundtrack to his life on every Casablancan beach and in every well traveled coffee shop but it was not until his mid teens that he was introduced to the guitar and began to play. Largely self taught - he would play, western pop, rock, blues and jazz, with family and friends. Later he would hear a Spanish guitar solo on a Casablancan beach and he had an epiphany. This instrument produced the most pleasing notes he had ever heard. Despite its simple clean sound it allows you to create emotional and honest music. The Spanish guitar became Oceo’s favorite instrument. Since immigrating to the United States he has continued to play, collaborate and experiment with the Mediterranean sounds he grew up with. “The more I listen, play, and compose; the more I understand that I have so much more to learn. Music is a big part of my life. I hope that every story in this album could cross the barriers of language and culture, and that it would find its way to you in the universal language of music.” Oceo.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About