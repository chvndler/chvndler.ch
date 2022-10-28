import Link from 'next/link';
import { styled } from 'stitches.config';

import { Box, Flex, Text } from '@/components/ds';
import { PopoverComponent } from '@/components/primitives/popover';
import { CursorData } from '@/components/sxripts';

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
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 18,
  paddingRight: 18,
  margin: 'auto',
  backgroundColor: 'transparent',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)'
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

export const AppNavbar = () => {
  return (
    <>
      <Nav>
        <ContentBox alignment="start">
          <Flex css={{ flexDirection: 'column', textAlign: 'left' }}>
            <Link href="/" passHref>
              <Text
                as="a"
                css={{
                  color: '$chxn4',
                  fontFamily: '$neueMontreal',
                  fontSize: 20,
                  fontWeight: '700',
                  lineHeight: '23px',
                  letterSpacing: '-0.04rem',
                  '@md': {
                    fontSize: 18,
                    fontWeight: '600',
                    lineHeight: '24px'
                  }
                }}
              >
                CHANDLER®
              </Text>
            </Link>
            {/* <!-- HOLD DESCRIPTION
            <Text
              css={{
                color: '$chxn3',
                fontFamily: '$telegraf',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: '15px',
                letterSpacing: 'normal'
              }}
            >
              Front-End Developer
            </Text>
            --> */}
          </Flex>
        </ContentBox>

        <ContentBox alignment="center">
          <Box css={{ '@md': { display: 'none' } }}>
            <CursorData />
          </Box>
        </ContentBox>

        <ContentBox alignment="end">
          <PopoverComponent />
        </ContentBox>
      </Nav>
    </>
  );
};
