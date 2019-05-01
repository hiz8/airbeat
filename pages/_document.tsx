import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface IProps {
  styleTags: [];
}

export default class MyDocument extends Document<IProps> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  public render() {
    return (
      <html>
        <Head>
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
          <link
            rel="icon"
            sizes="192x192"
            href="/static/img/icons/favicon-192.png"
          />
          <link rel="apple-touch-icon" href="/static/img/icons/icon-1024.png" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
