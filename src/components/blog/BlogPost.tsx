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
              backgroundColor: '$mauve2',
              marginTop: '10px',
              marginBottom: '10px',
              paddingLeft: '18px',
              paddingRight: '18px',
              paddingBottom: '10px',
              paddingTop: '10px',
              borderRadius: '12px',
              border: '2px solid $chvn1',
              '&:hover': {
                backgroundColor: '$mauve3',
                borderColor: '$chvn2',
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
                size='6'
                css={{
                  fontFamily: '$inter',
                  marginTop: '5px',
                  marginBottom: '5px',
                  color: '$mauve12',
                  letterSpacing: '-0.05rem',
                  lineHeight: '1.2',
                  fontWeight: '700',
                }}>
                {title}
              </Text>
              <Text size='2' css={{ color: '$mauve10', lineHeight: '1.4', fontWeight: '500' }}>
                {summary}
              </Text>
            </Box>
          </Box>
        </a>
      </Link>
    </>
  );
}
