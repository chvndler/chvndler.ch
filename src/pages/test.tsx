import { Box, Container, Text } from '@/components/ds';
import { AppBar } from '@/components/layout/app-bar';
import { MenuOnHoverComponent } from '@/components/primitives/popover/menu-on-hover';
import ReactScrollArea from '@/components/primitives/scroll-area';

const TestPage = () => {
  return (
    <>
      <AppBar />
      <MenuOnHoverComponent />
      <Box css={{ zIndex: 9999, position: 'fixed', top: 0, left: 0, padding: 20 }}>
        <Text
          css={{
            color: '$chxn9',
            fontSize: 82,
            fontFamily: '"Lateral Extended Bold", sans-serif',
            fontWeight: 'bold',
            lineHeight: '80px'
          }}
        >
          ABOUT
          <br />
          ME.
        </Text>
      </Box>
      <Container size={'1'} css={{ minHeight: '100vh', paddingTop: 200 }}>
        <ReactScrollArea />
      </Container>
    </>
  );
};

export default TestPage;
