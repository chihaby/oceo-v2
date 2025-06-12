import Tabs from '@/components/Tabs';
import Footer from '../components/Footer';
import styles from '../styles/TabsPage.module.css';

const tabs = () => {
  return (
    <div>
      <Tabs />
      <br />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default tabs;
