import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { getCssText, reset } from 'stitches.config';

// stitches setup...
const getCssAndReset = () => {
  const css = getCssText();
  reset();
  return css;
};

class CodeBoxDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssAndReset() }} />
        </Head>
        <body style={{ opacity: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CodeBoxDocument;
