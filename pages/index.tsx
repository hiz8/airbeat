import React from 'react';
import Page from '../components/Page';

class Counter extends React.Component {
  public static getInitialProps({ isServer }) {
    return { isServer };
  }

  public render() {
    return <Page />;
  }
}

export default Counter;
