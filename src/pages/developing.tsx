import { Container } from '@/components/ds';
import { MenuOnHoverComponent } from '@/components/primitives/popover/menu-on-hover';

const DevelopingPage = () => {
  return (
    <>
      <Container size={'4'} css={{ minHeight: '100%', paddingTop: 200 }}>
        <MenuOnHoverComponent />
      </Container>
    </>
  );
};

export default DevelopingPage;
