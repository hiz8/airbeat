import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft as IconArrowLeft } from "react-feather";
import * as styles from "../styles/pages/info.css";

const Info = () => {
  useEffect(() => {
    document.title = "Information - airbeat";
  }, []);

  return (
    <div className={styles.infoWrapper}>
      <div>
        <Link to="/" className={styles.infoButton}>
          <IconArrowLeft />
        </Link>
      </div>
      <main className={styles.main}>
        <div className={styles.logo}>
          <img src="/static/img/icons/logo.svg" alt="" />
        </div>
        <h1 className={styles.title}>airbeat</h1>
        <h2 className={styles.description}>
          Offline first metronome application
        </h2>
      </main>
      <div className={styles.copyright}>© 2019 hiz.</div>
    </div>
  );
};

export default Info;
