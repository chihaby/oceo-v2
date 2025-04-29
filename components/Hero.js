import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import oceo from "../public/img/oceo.png";
// import logo from '../public/img/logo.png'
import Subscribe from "./Subscribe";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
            <Card className={styles.hero__left}>
              <div className={styles.image__container}>
                <Image
                  src={oceo}
                  alt="oceo music image"
                  prop="fill"
                  className={styles.image}
                />
              </div>
            </Card>
          </Col>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
            <div className={styles.hero__right}>
              <span className={styles.strapline}>Oceo</span>
              <p className={styles.description}>
                {" "}
                Discover the beauty and versatility of the Spanish guitar with
                sensuous compositions like <em>Evora</em>,{" "}
                <em>The Rose & The Nightingale</em>, <em>Andalusia</em>,{" "}
                <em>Caravan</em> and much more.
              </p>
              <Subscribe />
              <span className={styles.patreon}>
                <a
                  href="https://patreon.com/oceo?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                  target="_blank"
                >
                  Patreon
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
