import { AboutMe } from '@/components/common/about-header';
import { Box, Container } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { Tweet } from '@/components/primitives/tweet';
import { RelativeFooter } from '~/components/layout/app-footer/relative-footer';

const DevelopingPage = () => {
  return (
    <>
      <PageLayout>
        {/* <!-- HERO CONTAINER --> */}
        <AboutMe />

        <Box css={{ display: 'none' }}>
          <Container
            size="3"
            css={{
              display: 'flex',
              alignItems: 'center',
              margin: 'auto',
              justifyContent: 'center',
              paddingTop: '100px'
            }}
          >
            <Tweet
              userUrl="https://twitter.com/chvndlerch"
              avatar="https://pbs.twimg.com/profile_images/1570572396913999872/eu5obCWK_reasonably_small.jpg"
              url="https://twitter.com/chvndlerch/status/1572055841225703426"
              author="chan"
              username="chvndlerch"
              date="8:07 PM · Sep 19, 2022 · Twitter for iPhone"
            >
              i love twitter.
            </Tweet>
          </Container>
        </Box>

        {/*END HERO CONTAINER*/}
      </PageLayout>
      <RelativeFooter />
    </>
  );
};

export default DevelopingPage;
