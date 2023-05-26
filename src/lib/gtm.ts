export const GTM_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const pageview = (url: string) => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    return;
  }

  // @ts-ignore
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
