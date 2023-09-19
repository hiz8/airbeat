import Document, { Html, Head, Main, NextScript } from 'next/document';

interface IProps {
  styleTags: [];
}

export default class MyDocument extends Document<IProps> {
  public render() {
    return (
      <Html lang="en">
        <Head>
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
      </Html>
    );
  }
}
