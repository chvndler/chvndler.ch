import { Box, Canvas, Container, Text } from '@/components/ds';
import { UseFullViewport } from '~/components/common/viewport/alt';
import { AppBar } from '~/components/layout/app-bar';
import { AppFooter } from '~/components/layout/app-footer';
import { GridStyle } from '~/components/primitives/project-display/grid-style';

const TestPage = () => {
  return (
    <>
      <AppBar />
      <UseFullViewport>
        <Canvas>
          <Container size="3">
            <GridStyle>
              <Box
                css={{
                  // backgroundColor: '$chxn3',
                  width: 'auto',
                  height: 'auto',
                  border: '1px solid $mauve5',
                  borderRadius: 20,
                  padding: 20
                }}
              >
                <Text css={{ font: '$telegraf' }}>PROJECTS</Text>
              </Box>
            </GridStyle>
          </Container>
        </Canvas>
      </UseFullViewport>
      <AppFooter />
    </>
  );
};

export default TestPage;
