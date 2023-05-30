import { TopLevelGrid } from '../../components/layout';
import MuxVideo from '../../components/shared/video/player';

export default function MediaIndex() {
  return (
    <>
      <section className='py-10 pv-3'>
        <h3 className='mb-2 text-2xl font-normal tracking-tight font-archivo text-grey-500 dark:text-grey-400'>
          Directed + edited by <span className='font-bold'>me</span>.
        </h3>
      </section>

      <TopLevelGrid>
        {film.map((video, i) => (
          <MuxVideo key={i} title={video.title} id={video.id} poster={video.poster} />
        ))}
      </TopLevelGrid>
    </>
  );
}

const film = [
  {
    title: '2019 Film Reel.',
    id: 'QIknhH4mVuQiVYZdaObY4gFZOGSxJOCKTSwu02JemdAs',
    poster: 'https://cdn-chvndler.s3.us-east-1.amazonaws.com/assets/img/2019.jpg',
  },
  {
    title: 'Alone with the Gods.',
    id: 'DLIx3q00lvWHvER8pO00wJQCxdk7xyzJ43aAVPqJe3BZ00',
    poster: 'https://cdn-chvndler.s3.us-east-1.amazonaws.com/assets/img/ph.jpg',
  },
];
