import { styled } from 'stitches.config';

import { Text } from '@/components/ds';

const StyledNavbar = styled('div', {
  zIndex: '20',
  position: 'fixed',
  top: 0,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100vw',
  height: 'auto',
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 18,
  paddingRight: 18,
  margin: 'auto',
  backgroundColor: 'transparent'
  // backdropFilter: 'blur(20px)',
  // WebkitBackdropFilter: 'blur(20px)'
});

const StyledContentBox = styled('div', {
  display: 'flex',
  width: 'auto',
  margin: 0,
  padding: 0,

  variants: {
    alignment: {
      start: {
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      },
      center: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
      end: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
      }
    }
  }
});

const StyledStack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  margin: 0,
  padding: 0
});

export const Nav = StyledNavbar;
export const ContentBox = StyledContentBox;
export const Stack = StyledStack;

export const AppNavbar = () => {
  return (
    <>
      <Nav>
        {/* <!-- INDEX --> */}
        <ContentBox alignment="start">
          <Stack>
            <Text
              css={{
                color: '$sage11',
                fontFamily: '$neueMontreal',
                fontSize: 15,
                fontWeight: 'normal',
                lineHeight: '26px',
                letterSpacing: '0.04rem'
              }}
            >
              <strong>CDC</strong>©
            </Text>

            <Text
              css={{
                color: '$sage11',
                fontFamily: '$tStar',
                fontSize: 13,
                fontWeight: 'normal',
                lineHeight: '20px',
                letterSpacing: '0.06rem'
              }}
            >
              FRONT-END DEVELOPER
            </Text>

            <Text
              css={{
                color: '$sage11',
                fontFamily: '$tStar',
                fontSize: 13,
                fontWeight: 'normal',
                lineHeight: '20px',
                letterSpacing: '0.06rem'
              }}
            >
              CHARLOTTE, NC
            </Text>

            <Text
              css={{
                color: '$sage11',
                fontFamily: '$tStar',
                fontSize: 13,
                fontWeight: 'normal',
                lineHeight: '20px',
                letterSpacing: '0.06rem'
              }}
            >
              CHVNDLER.CH@ICLOUD.COM
            </Text>
          </Stack>
        </ContentBox>
      </Nav>
    </>
  );
};
