import {AppProps} from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import * as gtag from '../lib/gtag';

import "../styles/pages/global.css";

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

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
          <link rel="canonical" href="https://airbeat.plyrs.app/" />
          <link rel="manifest" href="/static/app.webmanifest" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="airbeat" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="airbeat" />
        </Head>
        <Component {...pageProps} />
      </>
    );
}

export default MyApp;
