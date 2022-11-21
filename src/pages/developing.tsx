import { Container } from '@/components/ds';
import { MuxVideoObject } from '@/components/primitives/mux-video';

const DevelopingPage = () => {
  return (
    <>
      <Container size={'4'} css={{ minHeight: '100%', paddingTop: 200 }}>
        <MuxVideoObject />
      </Container>
    </>
  );
};

export default DevelopingPage;
