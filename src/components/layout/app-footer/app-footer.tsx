import { styled } from 'stitches.config';

import { Flex, Text } from '@/components/ds';
import CursorData from '@/components/primitives/cursor-data';
import { ThemeButton } from '@/components/primitives/theme-button';

const StyledFooter = styled('footer', {
  zIndex: '999',
  position: 'fixed',
  bottom: 0,
  boxSizing: 'border-box',
  display: 'flex',
  gap: 2,
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  width: '100vw',
  height: 'auto',
  padding: 15,
  backgroundColor: 'transparent',
  '@md': {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const ContentBox = styled('div', {
  display: 'flex',
  width: '100%',
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 0,
  marginRight: 0,
  padding: 0,

  variants: {
    alignment: {
      start: {
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        '@md': {
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }
      },
      center: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
      end: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        '@md': {
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    }
  }
});

export const Footer = StyledFooter;

export const AppFooter = () => {
  return (
    <>
      <Footer>
        <ContentBox
          alignment="start"
          css={{
            '@md': {
              display: 'none'
            }
          }}
        >
          <Text
            css={{
              color: '$sage11',
              fontFamily: '"Lateral Extended Regular", sans-serif',
              fontSize: 11,
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: 'normal',
              textTransform: 'uppercase',
              margin: 0,
              marginRight: 10
            }}
          >
            © CDC. MIT
          </Text>
          <CursorData />
        </ContentBox>

        <ContentBox alignment="center">
          <Flex css={{ flexDirection: 'row' }}>
            <Text
              css={{
                color: '$sage11',
                fontFamily: '"Lateral Extended Medium", sans-serif',
                fontSize: 11,
                fontWeight: 500,
                lineHeight: 'normal',
                textAlign: 'center',
                letterSpacing: '0.06px'
              }}
            >
              SOMETHING LIKE THIS BUT NOT THIS©
            </Text>
          </Flex>
        </ContentBox>

        <ContentBox alignment="end" css={{}}>
          <ThemeButton />
        </ContentBox>
      </Footer>
    </>
  );
};
