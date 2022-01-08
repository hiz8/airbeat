import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

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

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
