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
            <Link href='/' passHref style={{ color: 'inherit', textDecoration: 'inherit'}} >
              <span style={{fontSize: '36px', fontWeight: '600'}}>Oceo</span>
            </Link>
            <Subscribe />
          </Col>
          <Col xs={6} md={3}>
            <br />
            <br />
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
          <br />
          <br />
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

            <span>Created by </span><Link style={{ color: 'inherit', textDecoration: 'inherit'}} href={"https://www.websitetoro.com/"} rel="noopener noreferrer" target="_blank"><span style={{textDecoration: 'none', fontSize: '20px', fontWeight: '700'}}><em>Website Toro</em></span></Link>
          </div>
          </Col>
        </Row>
      </Container>    
    </div>
  )
}

export default Footer