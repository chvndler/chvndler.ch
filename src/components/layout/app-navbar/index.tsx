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
  paddingTop: 18,
  paddingBottom: 18,
  paddingLeft: 20,
  paddingRight: 20,
  margin: 'auto',
  backgroundColor: 'transparent',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)'
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

export const Nav = StyledNavbar;
export const ContentBox = StyledContentBox;

export const AppNavbar = () => {
  return (
    <>
      <Nav>
        {/* <!-- INDEX --> */}
        <ContentBox alignment="start">
          <Text
            css={{
              color: '$sage11',
              fontFamily: '$tStar',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: '24px',
              letterSpacing: '0.04rem'
            }}
          >
            INDEX
          </Text>
        </ContentBox>

        <ContentBox alignment="end">
          <Text
            css={{
              color: '$sage11',
              fontFamily: '$tStar',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: '24px',
              letterSpacing: '0.04rem'
            }}
          >
            PROJECTS
          </Text>
        </ContentBox>
      </Nav>
    </>
  );
};
