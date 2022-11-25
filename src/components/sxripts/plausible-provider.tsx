import PlausibleProvider from 'next-plausible';
import React from 'react';

type PlausibleProps = {
  children?: React.ReactNode;
};

export const AnalyticsProvider = ({ children }: PlausibleProps) => {
  return <PlausibleProvider domain="chvndler.ch">{children}</PlausibleProvider>;
};
