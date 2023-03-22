import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import logo from '../public/img/logo.png'
import Link from 'next/link'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div>
          <h1>About</h1>
        </div>
        <Row>        
          {/* <Col  xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
            <div className={styles.iamge__container}>
              <Image src={logo} alt="about oceo guitar player" prop="fill" className={styles.image}/>
            </div>
          </Col> */}
          {/* <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}> */}
          <Col className={styles.about}>
            <p>oceo evora. Born in Casablanca, Morocco. Oceo grew up in a lively and vibrant music culture. The incredible passion and joy of the Mediterranean music of Morocco is a fusion of Arabic, Spanish, French and Greek musical influences fueled by centuries of trade between the Mediterranean’s dynamic and rich cultures. The North African music scene is inseparable from its Mediterranean neighbors from whom it shares a rich history of melodic decadence. Oceo heard the rhythms and beats that would be a soundtrack to his life on every Casablancan beach and in every well traveled ....</p>
            <Link href={"/about"}>FIND OUT MORE</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About