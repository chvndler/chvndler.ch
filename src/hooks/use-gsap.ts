import { useEffect } from 'react';

import { gsap } from '@/lib/gsap';

export const useGsapContext = (func: gsap.ContextFunc, deps: any[] = []) => {
  useEffect(() => {
    const ctx = gsap.context(func);

    return () => {
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
