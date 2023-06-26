import React from 'react';
import NextTopLoader from 'nextjs-toploader';

export default function TopLoader() {
  return (
    <NextTopLoader
      color='#9E87C5'
      initialPosition={0.08}
      crawlSpeed={200}
      height={2}
      crawl={true}
      showSpinner={false}
      easing='ease'
      speed={300}
      // shadow='0 0 10px #2299DD,0 0 5px #2299DD'
    />
  );
}
