import { styled } from 'stitches.config';

import { Box, Canvas, Container, Flex, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';

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
        backgroundColor: '$chxn9'
      },
      chxn10: {
        backgroundColor: '$chxn10'
      },
      chxn11: {
        backgroundColor: '$chxn11'
      },
      chxn12: {
        backgroundColor: '$chxn12'
      }
    }
  }
});

const ColorPage = () => {
  return (
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

        <Container size="1" css={{ padding: 1, textAlign: 'center' }}>
          <Flex css={{ gap: 2, alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
            <ColorBox color="chxn9">
              <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>$chxn9</Text>
            </ColorBox>
            <ColorBox color="chxn10">
              <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>$chxn10</Text>
            </ColorBox>
            <ColorBox color="chxn11">
              <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>$chxn11</Text>
            </ColorBox>
            <ColorBox color="chxn12">
              <Text css={{ fontSize: 10, fontFamily: '$telegraf', lineHeight: '20px', color: '$chxn1' }}>$chxn12</Text>
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
  );
};

export default ColorPage;
