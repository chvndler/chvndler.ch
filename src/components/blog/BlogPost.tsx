import Link from 'next/link';
import type { Blog } from 'contentlayer/generated';
import { Box, Text } from '@/ui';

export default function BlogPost({ title, summary, slug }: Pick<Blog, 'title' | 'summary' | 'slug'>) {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a>
          <Box
            css={{
              backgroundColor: '$rhythmA2',
              marginTop: '6px',
              marginBottom: '6px',
              paddingLeft: '10px',
              paddingRight: '10px',
              borderRadius: '12px',
              border: '1px solid $chvn1',
              '&:hover': {
                // backgroundColor: '$sage2',
                backgroundColor: '$rhythmA3',
                border: '1px solid $rhythmA4',
              },
            }}>
            <Box
              css={{
                paddingTop: '5px',
                paddingBottom: '5px',

                marginTop: '5px',
                marginBottom: '10px',
              }}>
              <Text
                size='2'
                css={{
                  fontFamily: '$inter',
                  marginTop: '5px',
                  marginBottom: '5px',
                  color: '$rhythmA12',
                  letterSpacing: '-0.05rem',
                  lineHeight: '1.2',
                  fontWeight: '700',
                  '&:hover': {
                    opacity: '0.8',
                  },
                }}>
                {title}
              </Text>
              <Text size='2' css={{ color: '$rhythmA10', lineHeight: '1.4', fontWeight: '500' }}>
                {summary}
              </Text>
            </Box>
          </Box>
        </a>
      </Link>
    </>
  );
}
