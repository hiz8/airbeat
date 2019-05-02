import React from 'react';
import Page from '../components/Page';

class Counter extends React.Component {
  public static getInitialProps({ isServer }) {
    return { isServer };
  }

  componentDidMount = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./service-worker.js')
        .catch(err => console.error('Service worker registration failed', err));
    } else {
      console.log('Service worker not supported');
    }
  };

  public render() {
    return <Page />;
  }
}

export default Counter;
