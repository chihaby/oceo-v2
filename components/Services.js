import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import logo from '../public/img/logo.png'
import Link from 'next/link'
import styles from '../styles/Services.module.css'

const Services = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div>
          <h1>SERVICES</h1>
        </div>
        <Row>  
          <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1}}>
            <p>If you have music for your project weather it is a solo a song or soundtrack</p>
            <Link href={"/about"}>VIEW ALL SERVICES</Link>
          </Col>  
          <Col  xs={{span: 12, order: 2}} md={{span: 6, order: 2}}>
            <div className={styles.iamge__container}>
              <Image src={logo} alt="about oceo guitar player" prop="fill" className={styles.image}/>
            </div>
          </Col>    
        </Row>
      </Container>
    </div>
  )
}

export default Services