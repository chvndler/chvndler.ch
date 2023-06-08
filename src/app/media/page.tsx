import MuxVideo from '../../components/shared/video/player';
import type { Metadata } from 'next/types';
import { MediaWrapper, TopLevelGrid, UIWrapper } from '../../components/layout';

import { films } from '../../lib/films';
import { content } from '../../lib/website.config';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Chandler. Film and Media.',
  description:
    'Media displayed on this page is designed, directed, and edited by myself – © 2023. ALL RIGHTS RESERVED.',
};

export default function MediaIndex() {
  const copy = content.media;

  return (
    <>
      <MediaWrapper>
        <section className='container mx-auto max-w-[620px] pb-20 pt-10'>
          <h3 className='mb-2 text-2xl font-normal tracking-tight font-archivo text-carbon-700 dark:text-carbon-100 lg:text-3xl'>
            {copy.heading.partial}{' '}
            <span className='font-bold font-archivo'>{copy.heading.bold}</span>
          </h3>
          <p className='max-w-md font-archivo text-[9px] font-medium text-carbon-400 dark:text-carbon-500 lg:text-[10px]'>
            {copy.copyright.text}
            <br />
            <br />
            <span className='font-bold font-archivo text-carbon-500'>{copy.copyright.tag}</span>
          </p>
        </section>

        <TopLevelGrid>
          {films.map((video, i) => (
            <MuxVideo key={i} title={video.title} id={video.id} poster={video.poster} />
          ))}
        </TopLevelGrid>
      </MediaWrapper>
    </>
  );
}
