import type { Post } from 'contentlayer/generated';
import type { PropsWithChildren } from 'react';
import { styled } from 'stitches.config';

import { Container, Section, Text } from '@/components/ds';
import { AppBar } from '@/components/layout/app-bar';
import { PostContainer } from '@/components/layout/PostContainer';

import { Meta } from '../common/meta';

const AppBox = styled('div', {
  zIndex: '1',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100vw',
  overflow: 'auto',
  paddingTop: '100px',
  paddingBottom: '100px',
  paddingLeft: 0,
  paddingRight: 0,
  margin: 0
});

const RawContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontFamily: '$inter',
  lineHeight: '1.3'
});

export const JournalPageLayout = ({ children, post }: PropsWithChildren<{ post: Post }>) => {
  return (
    <>
      <Meta />
      <AppBar />
      <AppBox>
        <PostContainer title={post.title} description={post.summary} date={post.date}>
          <Container size="2">
            <Text
              css={{
                color: '$lime10',
                fontFamily: '$druk',
                fontSize: 18,
                fontWeight: 'bold',
                letterSpacing: 'normal',
                textAlign: 'center'
              }}
            >
              {post.title}
            </Text>
          </Container>
          <main>
            <Section size="2">
              <RawContent>{children}</RawContent>
            </Section>
          </main>
        </PostContainer>
      </AppBox>
    </>
  );
};
