import React from 'react';
import { cn } from '../../lib/utils';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(`wrap-layer1`)}>
      <div className={cn(`wrap-layer2 max-h-fit flex-1 px-3 py-4`)}>
        <div className="container mx-auto h-auto w-full max-w-[620px] items-center">{children}</div>
      </div>
    </div>
  );
};
