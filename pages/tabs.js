import Tabs from "@/components/Tabs";
import Footer from "../components/Footer";
import styles from "../styles/tabsPage.module.css";

const tabs = () => {
  return (
    <div>
      <Tabs />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default tabs;
