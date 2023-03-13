import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';
// import emailjs from '@emailjs/browser';
import Spinner from 'react-bootstrap/Spinner';
import Link from 'next/link';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFullNameInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      fullName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleMessageInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      message: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.fullName && values.email && values.message) {
      setValid(true);
    }
    setSubmitted(true);
    sendEmail();
  };

  const sendEmail = () => {
    const templateParams = {
      from_name: values.fullName,
      email: values.email,
      // phone: values.phone,
      message: values.message,
    };
    emailjs
      .send(
        process.env.USER_ID,
        process.env.TEMPLATE_ID,
        templateParams,
        process.env.PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
    resetInputValues();
  };

  const resetInputValues = () => {
    setValues((values) => ({
      ...values,
      fullName: '',
    }));
    setValues((values) => ({
      ...values,
      email: '',
    }));
    setValues((values) => ({
      ...values,
      message: '',
    }));
    routeToThankYouPage();
  };

  const router = useRouter();

  const routeToThankYouPage = () => {
    // e.preventDefault();
    setSubmitted(!submitted)
    setTimeout(() => {
      redirectToThankYouPage();
    }, 600);
  }

  const redirectToThankYouPage = () => {
    router.push('/thankYou');
  } 

  return (
    <div className={styles.container}>
    <Container>
      <Row>
        <Col>
        <h2>GET IN TOUCH</h2><br />
          <p className={styles.paragraph}>
            Please fill out the form below and we will get back to you as soon
            as possible.
          </p>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <span>Name</span>
          <br />
          <input
            className={styles.form_input}
            type='text'
            id='name'
            placeholder='Your name'
            required
            value={values.fullName}
            onChange={handleFullNameInputChange}
          />
          {submitted && !values.fullName && (
            <span id='first-name-error'>Please enter your full name</span>
          )}
          <br />
          <br />
          <span>Email</span>
          <br />
          <input
            className={styles.form_input}
            type='email'
            id='email'
            placeholder='Your email'
            required
            value={values.email}
            onChange={handleEmailInputChange}
          />
          <br />
          <br />
          <span>Message</span>
          <br />
          <textarea
            className={styles.form_message}
            type='text'
            id='message'
            placeholder='Message'
            required
            value={values.message}
            onChange={handleMessageInputChange}
          />
          <br />
          <br />
          <button
            type='subit'
            id='btnsubmit'
          >
            {' '}
            SUBMIT
          </button>
          {submitted && (
            <Spinner animation="border" role="status">
             <span className="visually-hidden"></span>
            </Spinner>
          )}
        </form>
      </Col>
      <Col>
        <div className={styles.contact_phone}>
          <p>
            <span>
              <i className='fa fa-phone'> PHONE</i>
            </span>
            <br />
            {' +1 510 630 9741'}
          </p>
        </div>
        <div className={styles.contact_email}>
          <p>
            <span>
              <i className='fa fa-envelope'> EMAIL</i> 
            </span>{' '}
            <br />
            {'WebsiteToro@gmail.com'}
          </p>
        </div>
        <div style={{color: 'white'}}>
          <p>
            <span>
              <i className="fa fa-bars"> SITE MAP</i>
            </span>{' '}
            <br />
            <ul >
              <li>
                <Link href='/' passHref><span className={styles.site_map}> Home</span></Link>
              </li>
              <li>
                <Link href='/about' passHref><span className={styles.site_map}> About</span></Link>
              </li>              
              <li>
                <Link href='/services' passHref><span className={styles.site_map}> services</span></Link>
              </li>              
              <li>
                <Link href='/contact' passHref><span className={styles.site_map}> Contact</span></Link>
              </li>
            </ul>
          </p>
        </div>
        <div className={styles.copyright}>
          <p> Copyright &copy; 2023 - Website Toro</p>
        </div>
      </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Footer;



