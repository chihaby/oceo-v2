import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import YoutubeEmbed from './YoutubeEmbed'
// import styles from '../styles/Courses.module.css'

const Courses = () => {
  return (
    <div>
      <Container>
        <Row>
          <h1>Courses</h1>
          <Col>
            <YoutubeEmbed />
          </Col>
          <Col>
            <p>Aside from playing I provide courses for playing guitar for achieving certain techniques</p>          
            <Link href={"/blog"}>ALL COURSES</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Courses