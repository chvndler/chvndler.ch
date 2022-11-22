import { Container } from '@/components/ds';
import { MuxVideoPlayer } from '@/components/primitives/mux-video/mux-video';

const DevelopingPage = () => {
  return (
    <>
      <Container size={'4'} css={{ minHeight: '100%', padding: 0 }}>
        <MuxVideoPlayer />
      </Container>
    </>
  );
};

export default DevelopingPage;
