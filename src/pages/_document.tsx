import Document, { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
