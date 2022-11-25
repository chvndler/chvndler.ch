import Script from 'next/script';

export default function PlausibleScript() {
  return (
    <>
      <Script defer data-domain="chvndler.ch" src="https://plausible.io/js/script.js" />
    </>
  );
}
