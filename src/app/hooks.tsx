'use client';

import * as React from 'react';

import { isProd, isClient, siteLog, gaTrackingId } from '@/lib/const';
import { AppAnalytics, GoogleAnalytics } from '@/components/analytics';
import { useFontsLoaded } from '@/lib/hooks/use-fonts-loaded';

export const AppHooks = () => {
  useFontsLoaded();

  if (isProd && isClient) {
    console.log(siteLog);
  }

  return gaTrackingId ? (
    <>
      <AppAnalytics />
      <React.Suspense fallback={null}>
        <GoogleAnalytics />
      </React.Suspense>
    </>
  ) : null;
};
