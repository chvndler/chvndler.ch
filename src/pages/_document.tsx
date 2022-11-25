import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { getCssText, reset } from 'stitches.config';

import PlausibleScript from '@/components/sxripts/plausible';

class App extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <style id={'stitches'} dangerouslySetInnerHTML={{ __html: getCssAndReset() }} />
          <PlausibleScript />
        </Head>
        <body style={{ opacity: '0' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default App;

/**
 * @getCss
 */
const getCssAndReset = () => {
  const css = getCssText();
  reset();
  return css;
};

/**
 * @PlausibleScript
 * <script defer data-domain="chvndler.ch" src="https://plausible.io/js/script.js"></script>
 */
