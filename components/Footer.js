import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Subscribe from './Subscribe'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <Link href='/' passHref>
              <span style={{textDecoration: 'none', fontSize: '32px', fontWeight: '500'}}>Odul</span>
            </Link>
            <Subscribe />
          </Col>
          <Col xs={6} md={3}>
              <span>
                <i className="fa fa-bars"> SITE MAP</i>
              </span>{' '}
              <br />
              <Col >
                <ul >
                  <li className={styles.li}>
                    <Link href='/' passHref><span className={styles.site_map}> Home</span></Link>
                  </li>
                  <li className={styles.li}>
                    <Link href='/about' passHref><span className={styles.site_map}>About</span></Link>
                  </li>    
                  <li className={styles.li}>
                    <Link href='/music' passHref><span className={styles.site_map}>Music</span></Link>
                  </li>         
                </ul>
              </Col>
          </Col>
          <Col xs={6} md={3}>
            <br />
            <ul >         
              <li className={styles.li}>
                <Link href='/services' passHref><span className={styles.site_map}>Services</span></Link>
              </li>   
              {/* <li className={styles.li}>
                <Link href='/blog' passHref><span className={styles.site_map}>Blog</span></Link>
              </li>            */}
              <li className={styles.li}>
                <Link href='/contact' passHref><span className={styles.site_map}>Contact</span></Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
          <div className={styles.contact_email}>
          <p>
            <span>
              <i className='fa fa-envelope'> EMAIL</i> 
            </span>{' '}
            <br /><br />
            {'oceomusic@gmail.com'}
          </p>
        </div>
          <div className={styles.copyright}>
            {/* <p> Copyright &copy; 2023 - Oceo Music</p> */}
 
              <span>
                <i className='fa fa-envelope'>Website</i> 
              </span>{' '}

            <span>Created by </span><Link href={"https://www.websitetoro.com/"} rel="noopener noreferrer" target="_blank"><span style={{textDecoration: 'none', fontSize: '20px', fontWeight: '400'}}>Website Toro</span></Link>
          </div>
          </Col>
        </Row>
      </Container>    
    </div>
  )
}

export default Footer