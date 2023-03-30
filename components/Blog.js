import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Card from 'react-bootstrap/Card';
import styles from '../styles/Blog.module.css'

const Blog = () => {
  return (
    <div  className={styles.container}>
      <Container>
        <Row>
          <br />
          <div>
          <h1>LATEST BLOG POSTS</h1>
          </div>
          <br />
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                <Link href={"/blog"}>MORE ARTICLES</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                <Link href={"/blog"}>MORE ARTICLES</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card content
                </Card.Text>
                <Link href={"/blog"}>MORE ARTICLES</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div>
          <Link href={"/blog"}>ALL ARTICLES</Link>
        </div>
      </Container>
    </div>
  )
}

export default Blog