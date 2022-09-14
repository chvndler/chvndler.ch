import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import Link from 'next/link';
import { NowPlayingSong } from '@/lib/types';
import { Box, Flex, Text } from '@/ui';
import { Avatar } from '@/components/Avatar';
import { Status } from '@/components/Status';
import { Skeleton } from '@/components/Skeleton';

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <>
      <Flex css={{ padding: 0 }}>
        <Box css={{ width: 'auto' }}>
          <Flex css={{ flexDirection: 'row' }}>
            {data?.songUrl ? (
              <>
                {/* <!-- isPlaying Component --> */}
                <Box css={{ position: 'relative', margin: 'auto', alignItems: 'left' }}>
                  <Link href={data.songUrl} passHref>
                    <a target='_blank' rel='noreferrer noopener'>
                      <Avatar variant='spotify' size='5' alt='Spotify' src={data.albumImageUrl} fallback='©' />
                    </a>
                  </Link>
                </Box>

                <Flex css={{ alignItems: 'left', paddingLeft: '6px', flexDirection: 'column', margin: 'auto' }}>
                  <Link href={data.songUrl} passHref>
                    <a target='_blank' rel='noreferrer noopener'>
                      <Text
                        css={{
                          alignItems: 'left',
                          lineHeight: '0.7',
                          margin: '1px',
                          fontSize: '13px',
                          padding: '3px',
                          fontWeight: '800',
                          color: '$sage11',
                          '&:hover': {
                            cursor: 'pointer',
                          },
                        }}>
                        {data.title}
                      </Text>
                    </a>
                  </Link>

                  <Text
                    css={{
                      lineHeight: '0.7',
                      margin: '1px',
                      fontSize: '11px',
                      padding: '3px',
                      fontWeight: '500',
                      color: '$sage9',
                    }}>
                    {data.artist}
                  </Text>

                  <Box css={{ paddingLeft: '6px', paddingRight: '6px', paddingTop: '4px' }}>
                    <Status size='1' variant='green'></Status>
                  </Box>
                </Flex>
              </>
            ) : (
              <>
                {/* <!-- Not Playing Component --> */}
                <Box css={{ position: 'relative', margin: 'auto' }}>
                  <Avatar variant='spotify' size='5' alt='Spotify' src='' fallback='⌁'></Avatar>
                </Box>

                <Flex css={{ paddingLeft: '6px', flexDirection: 'column', margin: 'auto' }}>
                  <Text
                    css={{
                      lineHeight: '0.7',
                      margin: '1px',
                      fontSize: '13px',
                      padding: '3px',
                      fontWeight: '800',
                      color: '$sage11',
                    }}>
                    Not Listening
                  </Text>

                  <Text
                    css={{
                      lineHeight: '0.7',
                      margin: '1px',
                      fontSize: '11px',
                      padding: '3px',
                      fontWeight: '500',
                      color: '$sage9',
                    }}>
                    <Skeleton variant='text' />
                  </Text>

                  <Box css={{ paddingLeft: '6px', paddingRight: '6px', paddingTop: '4px' }}>
                    <Status size='1' variant='red'></Status>
                  </Box>
                </Flex>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
