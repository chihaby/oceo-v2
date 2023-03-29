import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import styles from '../styles/Hero.module.css'
import oceo from '../public/img/oceo.png'
// import logo from '../public/img/logo.png'


const Hero = () => {
  return (
    <div className={styles.container}>
      <Container >
        <Row>
          <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
            <div className={styles.hero__left} >
              <span className={styles.strapline}>Left 1</span>
              <p className={styles.description}> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <button className={styles.cta}>Sign Up</button>
            </div>

          </Col>
          <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}} >      
            <Card className={styles.hero__right}>
              <div className={styles.iamge__container}>
                <Image src={oceo} alt="oceo music image" prop="fill" className={styles.image}/>
              </div> 
              <Card.Body>
                <Card.Title>Album Stories</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
