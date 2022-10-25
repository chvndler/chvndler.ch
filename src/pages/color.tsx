import { styled } from 'stitches.config';

import { Box, Canvas, Container, Flex, Space, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { AppFooter } from '~/components/layout/app-footer';

const ColorBox = styled('div', {
  boxSizing: 'border-box',
  width: 80,
  height: 20,
  padding: 0,
  margin: 0,
  position: 'relative',
  variants: {
    color: {
      chxn1: {
        backgroundColor: '$chxn1'
      },
      chxn2: {
        backgroundColor: '$chxn2'
      },
      chxn3: {
        backgroundColor: '$chxn3'
      },
      chxn4: {
        backgroundColor: '$chxn4'
      },
      chxn5: {
        backgroundColor: '$chxn5'
      },
      chxn6: {
        backgroundColor: '$chxn6'
      },
      chxn7: {
        backgroundColor: '$chxn7'
      },
      chxn8: {
        backgroundColor: '$chxn8'
      },
      chxn9: {
        backgroundColor: '$sage9'
      },
      chxn10: {
        backgroundColor: '$sage10'
      },
      chxn11: {
        backgroundColor: '$sage11'
      },
      chxn12: {
        backgroundColor: '$sage12'
      },
      sage9: {
        backgroundColor: '$sage9'
      },
      sage10: {
        backgroundColor: '$sage10'
      },
      sage11: {
        backgroundColor: '$sage11'
      },
      sage12: {
        backgroundColor: '$sage12'
      },
      slate9: {
        backgroundColor: '$slate9'
      },
      slate10: {
        backgroundColor: '$slate10'
      },
      slate11: {
        backgroundColor: '$slate11'
      },
      slate12: {
        backgroundColor: '$slate12'
      }
    }
  }
});

const ColorPage = () => {
  return (
    <>
      <PageLayout>
        <Canvas>
          <Container size="1" css={{ padding: 1, textAlign: 'center' }}>
            <Flex css={{ gap: 2, alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
              <ColorBox color="chxn1" css={{ border: '1px solid $chxn2' }}>
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '19px', color: '$chxn3' }}>$chxn1</Text>
              </ColorBox>
              <ColorBox color="chxn2">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn3' }}>$chxn2</Text>
              </ColorBox>
              <ColorBox color="chxn3">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn2' }}>$chxn3</Text>
              </ColorBox>
              <ColorBox color="chxn4">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn2' }}>$chxn4</Text>
              </ColorBox>
            </Flex>
          </Container>

          <Container size="1" css={{ padding: 1, textAlign: 'center' }}>
            <Flex css={{ gap: 2, alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
              <ColorBox color="chxn5">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>$chxn5</Text>
              </ColorBox>
              <ColorBox color="chxn6">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>$chxn6</Text>
              </ColorBox>
              <ColorBox color="chxn7">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>$chxn7</Text>
              </ColorBox>
              <ColorBox color="chxn8">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn4' }}>$chxn8</Text>
              </ColorBox>
            </Flex>
          </Container>

          <Space size="1" />

          {/* <!-- SAGE --> */}
          <Container size="1" css={{ padding: 1, textAlign: 'center' }}>
            <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn5' }}>SAGE©</Text>
            <Flex css={{ gap: 2, alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
              <ColorBox color="sage9">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>$sage9</Text>
              </ColorBox>
              <ColorBox color="sage10">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>
                  $sage10
                </Text>
              </ColorBox>
              <ColorBox color="sage11">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>
                  $sage11
                </Text>
              </ColorBox>
              <ColorBox color="sage12">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>
                  $sage12
                </Text>
              </ColorBox>
            </Flex>
          </Container>

          <Space size="1" />

          {/* <!-- SLATE --> */}
          <Container size="1" css={{ padding: 1, textAlign: 'center' }}>
            <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn5' }}>SLATE©</Text>
            <Flex css={{ gap: 2, alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
              <ColorBox color="slate9">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>
                  $slate9
                </Text>
              </ColorBox>
              <ColorBox color="slate10">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>
                  $slate10
                </Text>
              </ColorBox>
              <ColorBox color="slate11">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>
                  $slate11
                </Text>
              </ColorBox>
              <ColorBox color="slate12">
                <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>
                  $slate12
                </Text>
              </ColorBox>
            </Flex>
          </Container>

          <Container size="1" css={{ padding: 20, textAlign: 'center' }}>
            <Flex css={{ gap: 2, alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
              <Box css={{ width: 'auto', height: 'auto' }}>
                <Box css={{ border: '1px solid $chxn3', borderRadius: 6, width: 'auto' }}>
                  <Text
                    css={{
                      fontFamily: '$neueMontreal',
                      fontWeight: 'normal',
                      fontSize: 18,
                      lineHeight: '19px',
                      paddingLeft: 3,
                      paddingRight: 3
                    }}
                  >
                    <span>CHXN.COLR©</span>
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Container>
        </Canvas>
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default ColorPage;
