/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Head from 'next/head';
import { ArrowLeft as IconArrowLeft } from 'react-feather';
import * as styles from '../styles/pages/info.css';

const Info = () => {
  return (
    <div className={styles.infoWrapper}>
      <Head>
        <title>Information - airbeat</title>
      </Head>
      <div>
        <Link href="/" className={styles.infoButton}>
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
