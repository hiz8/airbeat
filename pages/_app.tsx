import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

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
