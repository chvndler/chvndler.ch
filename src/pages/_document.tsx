/** @format */

import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script'
import {getCssText, reset} from 'stitches.config'

class App extends Document {
 static async getInitialProps(ctx: DocumentContext) {
  const initialProps = await Document.getInitialProps(ctx)
  return {...initialProps}
 }
 render() {
  return (
   <Html lang={'en'}>
    <Head>
     <Script src='https://api.chvndler.ch/script.js' data-site='JZNGQCWH' defer></Script>
     <style id={'stitches'} dangerouslySetInnerHTML={{__html: getCssAndReset()}} />
    </Head>
    <body style={{opacity: '0'}}>
     <Main />
     <NextScript />
    </body>
   </Html>
  )
 }
}

export default App

const getCssAndReset = () => {
 const css = getCssText()
 reset()
 return css
}
