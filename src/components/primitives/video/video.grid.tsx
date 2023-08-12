'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import MuxVideo from '@/components/shared/video/player';
import { films } from '@/lib/data/film.constants';

type GridItemProps = {
  children?: React.ReactNode;
  className?: string;
};

const GridItem: React.FC<GridItemProps> = ({ className }) => (
  <div className={cn(className, 'w-full p-4 sm:w-1/2 md:w-1/4')}>
    <div className='grid grid-cols-4'>
      {films.map((video, i) => (
        <MuxVideo
          key={i}
          title={video.title}
          id={video.id}
          poster={video.poster}
        />
      ))}
    </div>
  </div>
);

export const VGrid: React.FC<{}> = () => {
  return (
    <section>
      <GridItem className='' />
    </section>
  );
};
