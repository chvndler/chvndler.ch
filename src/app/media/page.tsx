import MuxVideo from '../../components/shared/video/player';
import type { Metadata } from 'next/types';
import { TopLevelGrid } from '../../components/layout';
import { media_projects } from '../../lib/copyright';

import { films } from '../../lib/films';

export const metadata: Metadata = {
  title: 'Chandler. Film and Media.',
  description:
    'Media displayed on this page is designed, directed, and edited by myself – © 2023. ALL RIGHTS RESERVED.',
};

export default function MediaIndex() {
  const media = media_projects.copyright;

  return (
    <>
      <section className='py-10'>
        <h3 className='mb-2 font-archivo text-2xl font-normal tracking-tight text-grey-500 dark:text-grey-400'>
          Some of my <span className='font-bold'>film</span>.
        </h3>
        <p className='max-w-md font-archivo text-[9px] font-medium text-grey-400 dark:text-grey-500'>
          {media.text}
          <br />
          <br />
          <span className='font-bold text-grey-500'>{media.tag}</span>
        </p>
      </section>

      <TopLevelGrid>
        {films.map((video, i) => (
          <MuxVideo key={i} title={video.title} id={video.id} poster={video.poster} />
        ))}
      </TopLevelGrid>
    </>
  );
}
