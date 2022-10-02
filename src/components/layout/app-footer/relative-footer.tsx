import Link from 'next/link';
import { styled } from 'stitches.config';

import { Flex, Text } from '@/components/ds';
import { ThemeToggle } from '@/components/primitives/ui-switch/theme-toggle';

const StyledFooter = styled('footer', {
  zIndex: '999',
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  gap: 2,
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  width: '100vw',
  height: 'auto',
  padding: 20,
  backgroundColor: 'transparent',
  color: '$chvn100',
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

export const RelativeFooter = () => {
  return (
    <>
      <Footer>
        <ContentBox alignment="start">
          <Link href="/" passHref>
            <Text
              as="a"
              css={{
                color: '$chxn3',
                fontFamily: '$neueMontreal',
                fontSize: 13,
                fontWeight: '500',
                lineHeight: 'normal',
                letterSpacing: '-0.01rem',
                margin: 0,
                marginRight: 10,
                '@md': {
                  display: 'none'
                },
                '&:hover': {
                  color: '$chxn2'
                }
              }}
            >
              © All rights reserved.
            </Text>
          </Link>
        </ContentBox>

        <ContentBox alignment="center">
          <Flex css={{ flexDirection: 'column' }}>
            <Text
              css={{
                color: '$chxn3',
                fontFamily: '$neueMontreal',
                fontSize: 13,
                fontWeight: '500',
                lineHeight: 'normal',
                letterSpacing: '0.02rem'
              }}
            >
              SOMETHING LIKE THIS BUT NOT THIS™
            </Text>
          </Flex>
        </ContentBox>

        <ContentBox alignment="end" css={{}}>
          <ThemeToggle />
        </ContentBox>
      </Footer>
    </>
  );
};
