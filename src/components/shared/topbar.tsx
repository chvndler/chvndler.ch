'use client';

import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

function TopBar() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    setShowBar(true);
  }, []);

  return (
    <div
      className={cn('topbar z-9999 fixed left-0 top-0 w-full bg-B500', showBar ? 'h-[2px]' : 'h-0')}
      style={{ transition: 'height 0.3s ease-in-out' }}
    />
  );
}

export default TopBar;
