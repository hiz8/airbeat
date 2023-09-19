import { AppProps } from 'next/app';
import Head from 'next/head';
import { SSRProvider } from '@react-aria/ssr';

import '../styles/pages/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>airbeat</title>

        <meta
          name="description"
          content="Offline supported metronome application"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"
        />
        <link rel="canonical" href="https://airbeat.hizapp.blue/" />
        <link rel="manifest" href="/static/app.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="airbeat" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="airbeat" />
      </Head>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp;
