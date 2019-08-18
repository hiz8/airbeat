import React, { useEffect } from 'react';
import Page from '../components/Page';

export default () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./service-worker.js')
        .catch(err => console.error('Service worker registration failed', err));
    } else {
      console.log('Service worker not supported');
    }
  });

  return <Page />;
};
