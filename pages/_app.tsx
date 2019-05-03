import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { createGlobalStyle } from 'styled-components';
import { initStore } from '../store';
import color from '../const/color';

interface IProps {
  store: Store;
}

class MyApp extends App<IProps> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  public render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title>airbeat</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

/**
 * @param initStore - 初期化された Store
 */
export default withRedux(initStore)(MyApp);

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
