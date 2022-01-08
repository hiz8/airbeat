import React from 'react';
import { Provider } from 'react-redux';
import {AppProps} from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { createGlobalStyle } from 'styled-components';
import store from '../store';
import * as gtag from '../lib/gtag';
import color from '../const/color';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));


function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <GlobalStyle />
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
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Overpass Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Overpass Mono Regular'), local('OverpassMono-Regular'),
      url('/static/fonts/overpass-mono-v3-latin-regular.woff2') format('woff2'),
      url('/static/fonts/overpass-mono-v3-latin-regular.woff') format('woff'),
      url('/static/fonts/overpass-mono-v3-latin-regular.ttf') format('truetype');
  }
  html, body {
    margin: 0;
    position: relative;
  }
  body {
    overflow: auto;
    font-size: 62.5%;
    background-color: ${color.BASE};
    color: #fff;
    font-family: 'Overpass Mono', monospace;
  }
`;
