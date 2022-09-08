import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { Grid } from '@/ui';
import { arenaChannel } from '/api/arena';
import Track from '@/components/Track';

export default function ArenaGrid() {
  const { data } = useSWR<arenaChannel>('/api/arena', fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      <Grid
        align='center'
        columns={{ '@initial': 1, '@bp1': 2, '@bp2': 3 }}
        css={{
          gap: '4px',
          placeItems: 'stretch',
          gridAutoRows: '120px',
          mb: '$8',
        }}>
        {data.tracks.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </Grid>
    </>
  );
}
