import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft as IconArrowLeft } from "react-feather";
import * as styles from "../styles/pages/info.css";
import { audioPlayer } from "../lib/audio";

const title = "Information - airbeat";

const Info = () => {
  const handleClickLink = () => {
    audioPlayer.play("swipe2");
  };

  useEffect(() => {
    audioPlayer.play("swipe");
  }, []);

  return (
    <div className={styles.infoWrapper}>
      <title>{title}</title>
      <div>
        <Link to="/" className={styles.infoButton} onClick={handleClickLink}>
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
