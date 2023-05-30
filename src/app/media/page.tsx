import MuxVideo from '../../components/shared/video/player';
import { TopLevelGrid } from '../../components/layout';

import { films } from '../../lib/films';

export default function MediaIndex() {
  return (
    <>
      <section className='pv-3 py-10'>
        <h3 className='mb-2 font-archivo text-2xl font-normal tracking-tight text-grey-500 dark:text-grey-400'>
          Directed + edited by <span className='font-bold'>me</span>.
        </h3>
      </section>

      <TopLevelGrid>
        {films.map((video, i) => (
          <MuxVideo key={i} title={video.title} id={video.id} poster={video.poster} />
        ))}
      </TopLevelGrid>
    </>
  );
}
