/**
 *
 * api constants
 */

export const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const isClient = typeof document !== 'undefined';
export const isServer = !isClient;

if (typeof process.env.NEXT_PUBLIC_SITE_URL !== 'string') {
  throw new Error(
    `Please set the NEXT_PUBLIC_SITE_URL environment variable to your site's URL.`,
  );
}

export const siteURL = new URL(process.env.NEXT_PUBLIC_SITE_URL);
export const siteOrigin = siteURL.origin;

export const siteLog = `

      ::::::::  :::::::::   :::::::: 
    :+:    :+: :+:    :+: :+:    :+: 
   +:+        +:+    +:+ +:+         
  +#+        +#+    +:+ +#+          
 +#+        +#+    +#+ +#+           
#+#    #+# #+#    #+# #+#    #+#     
########  #########   ########       

--------------------------------------

© 2023 CDC®. All rights reserved. 
https://www.chvndler.ch/
`;
