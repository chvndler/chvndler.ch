import MuxVideo from '../../components/shared/video/player';
import { TopLevelGrid } from '../../components/layout';

import { films } from '../../lib/films';

export default function MediaIndex() {
  return (
    <>
      <section className='pv-3 py-10'>
        <h3 className='mb-2 font-archivo text-2xl font-normal tracking-tight text-grey-500 dark:text-grey-400'>
          Some of my <span className='font-bold'>films</span>.
        </h3>
        <p className='max-w-md font-archivo text-[9px] font-medium text-grey-400 dark:text-grey-500'>
          ALL MEDIA DISPLAYED ON THIS PAGE IS DESIGNED, DIRECTED, AND EDITED BY MYSELF. YOU MAY NOT
          REPRODUCE, MODIFY, DISTRIBUTE, OR REPUBLISH ANYTHING HERE, WITHOUT MY PRIOR WRITTEN
          CONSENT.
          <br />
          <br />
          <span className='font-bold text-grey-500'>© 2023. ALL RIGHTS RESERVED</span>.
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
