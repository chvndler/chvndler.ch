import Head from 'next/head';
import { useState } from 'react';
import BlogContainer from '@/components/blog/BlogContainer';
import BlogPost from '@/components/blog/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { pick } from '@/lib/utils';
import { allBlogs } from 'contentlayer/generated';
import { Badge, Box, Container, Paragraph, Section, Text, TextField } from '@/ui';

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <Box css={{}}>
        <Head>
          <title>Blog - chvn.me/</title>
        </Head>

        <Box css={{ paddingTop: '60px', paddingBottom: '80px' }}>
          <BlogContainer title='Blog – Chandler Chappell' description='Notes, thoughts, and ideas.'>
            <Box css={{ padding: 0 }}>
              <Section
                size='1'
                css={{
                  padding: 0,
                  width: '100%',
                }}>
                <Container size='3'>


                  {/* <!-- Journal Heading --> */}
                  <Text
                    size='7'
                    css={{
                      color: '$air',
                      fontFamily: '$pragmaticaExtended',
                      fontWeight: '700',
                      lineHeight: '1.5',
                      paddingBottom: '18px',
                    }}>
                    journal
                  </Text>

                  <Paragraph
                    size='1'
                    css={{
                      color: '$mauve12',
                      fontFamily: '$chGrotesk',
                      fontSize: '15px',
                      fontWeight: '500',
                      lineHeight: '1.5',
                      marginBottom: '20px',
                    }}>
                    This journal will document my thoughts, ideas, notes, and any resources that have shaped me as a
                    developer. I plan to also use this space as my own knowledge base for all things dev.
                    My favorite posts are pinned to the top under &quot;Popular&quot;.
                  </Paragraph>


                  <Text
                    css={{
                      color: '$chvn9',
                      fontFamily: '$pragmaticaExtended',
                      fontSize: '10px',
                      fontWeight: '600',
                      lineHeight: '1.3',
                    }}>
                    {`ENTRIES: 0${posts.length}`}
                  </Text>
                </Container>
              </Section>
            </Box>

            <Section size='1' css={{ padding: 0 }}>
              <Container size='3' css={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <Box css={{ position: 'relative' }}>
                  <TextField
                    size='2'
                    aria-label='Search articles'
                    type='text'
                    onChange={e => setSearchValue(e.target.value)}
                    placeholder='Use the search bar to filter by title.'
                  />
                </Box>
              </Container>
            </Section>

            {!searchValue && (
              <>
                <Section size='1' css={{ padding: 0 }}>
                  <Container size='3' css={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <Badge
                      size='2'
                      css={{ border: '1px solid $chvn4', borderRadius: '8px', py: '14px', px: '10px' }}>
                      <Text
                        size='2'
                        css={{
                          padding: '4px',
                          fontFamily: '$inter',
                          color: '$chvn4',
                          fontSize: '13px',
                          fontWeight: '800',
                          letterSpacing: '-0.02rem',
                          lineHeight: 'normal',
                        }}>
                        Popular Posts
                      </Text>
                    </Badge>
                    <BlogPost
                      title='How I Got Into Code.'
                      summary='Learn more about who I am, and what led me down the path of all things tech.'
                      slug='about'
                    />
                  </Container>
                </Section>
              </>
            )}

            <Section size='1' css={{ padding: 0 }}>
              <Container size='3' css={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <Badge size='2' css={{ border: '1px solid $chvn4', borderRadius: '8px', py: '14px', px: '10px' }}>
                  <Text
                    size='2'
                    css={{
                      padding: '4px',
                      fontFamily: '$inter',
                      color: '$chvn4',
                      fontSize: '13px',
                      fontWeight: '800',
                      letterSpacing: '-0.02rem',
                      lineHeight: 'normal',
                    }}>
                    All Posts
                  </Text>
                </Badge>
                {!filteredBlogPosts.length && (
                  <Text size='2' css={{ lineHeight: '1.2' }}>
                    No posts found.
                  </Text>
                )}
                {filteredBlogPosts.map(post => (
                  <BlogPost key={post.title} {...post} />
                ))}
              </Container>
            </Section>
          </BlogContainer>
        </Box>
      </Box>
    </>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map(post => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

  return { props: { posts } };
}
