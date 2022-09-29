import { Canvas, Container } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { Tweet } from '@/components/primitives/tweet';

const DevelopingPage = () => {
  return (
    <PageLayout>
      {/* <!-- HERO CONTAINER --> */}
      <Canvas>
        <Container size="3" css={{ display: 'flex', alignItems: 'center', margin: 'auto', justifyContent: 'center' }}>
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
      </Canvas>
      {/*END HERO CONTAINER*/}
    </PageLayout>
  );
};

export default DevelopingPage;
