import { format, parseISO } from 'date-fns';
import BlogContainer from '@/components/blog/BlogContainer';
import { Box, Container, Flex, Section, Text } from '@/ui';
import type { PropsWithChildren } from 'react';
import type { Blog } from 'contentlayer/generated';
import { styled } from '@/lib/stitches.config';

const editUrl = slug => `https://github.com/chvndler/chvn.me/edit/main/data/blog/${slug}.mdx`;
const discussUrl = slug => `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://chvn.me/blog/${slug}`)}`;

const RawContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontFamily: '$mono',
  lineHeight: '1.3',
});

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Blog }>) {
  return (
    <Box css={{ paddingTop: '80px' }}>
      <BlogContainer
        title={`${post.title} – chvn.me`}
        description={post.summary}
        image={`https://chvn.me${post.image}`}
        date={new Date(post.publishedAt).toISOString()}
        type='article'>
        <article>
          <Section size='1' css={{ padding: 0 }}>
            <Container size='3' css={{ paddingBottom: '20px' }}>
              <Text
                size='3'
                css={{
                  marginTop: '5px',
                  marginBottom: '5px',
                  letterSpacing: '-0.05em',
                  color: '$mauve12',
                  lineHeight: 'normal',
                  fontSize: '18px',
                  fontFamily: '$pragmaticaExtended',
                  fontWeight: '800',
                  '&:hover': {
                    opacity: '0.8',
                  },
                }}>
                {post.title}
              </Text>

              <Flex css={{ flexDirection: 'column' }}>
                <Box css={{ alignItems: 'center', paddingBottom: '0px' }}>
                  {/* <!-- ADD A COOL BLOG ICON HERE --> */}
                  <Text css={{ color: '$sage11', fontFamily: '$pragmatica', fontSize: '13px', lineHeight: '1.4' }}>
                    {'@chv_ndler : '}
                    {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
                  </Text>

                  <Text css={{ fontFamily: '$pragmatica', lineHeight: '1.3', paddingTop: '10px' }}>{post.summary}</Text>
                </Box>
              </Flex>
            </Container>
          </Section>

          {/* <!-- CHILDREN (CONTENT) --> */}
          <Section size='1' css={{ padding: 0 }}>
            <Container size='3'>
              <RawContent>{children}</RawContent>
            </Container>
          </Section>

          <Section size='1' css={{ padding: 0 }}>
            <Container size='3' css={{ paddingTop: '40px', paddingBottom: '40px' }}>
              <Flex css={{ flexDirection: 'row', margin: 'auto', alignItems: 'center', textAlign: 'center' }}>
                <Text size='2' css={{ textAlign: 'center', fontWeight: 'bold', marginRight: '12px' }}>
                  <a href={discussUrl(post.slug)} target='_blank' rel='noopener noreferrer'>
                    {'Discuss on Twitter'}
                  </a>
                </Text>
                <Text size='2'
                      css={{ textAlign: 'center', fontWeight: 'bold', marginRight: '12px', marginLeft: '12px' }}>
                  <a href={editUrl(post.slug)} target='_blank' rel='noopener noreferrer'>
                    {'Edit on GitHub'}
                  </a>
                </Text>
              </Flex>
            </Container>
          </Section>
        </article>
      </BlogContainer>
    </Box>
  );
}
