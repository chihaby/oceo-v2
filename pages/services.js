import Services from '@/components/Services'
import Footer from '../components/Footer'
import styles from '../styles/servicePage.module.css'

const services = () => {
  return (
    <div>
      <Services />
      <div className={styles.footer}>
      <Footer />
      </div>
    </div>
  )
}

export default services