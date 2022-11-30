import { styled, theme } from 'stitches.config';

import { Flex, PassLink } from '@/components/ds';
import { Icxn } from '@/components/icons/atlr-icxns';
import { CursorData } from '@/components/primitives/cursor-data';
import { ThemeSwitch } from '@/components/primitives/theme-switcher';

const twitter = 'https://twitter.com/chvndlerch';
const github = 'https://github.com/chvndler';
const are_na = 'https://www.are.na/chvndler-ch';

export const CoverFooter = () => {
  return (
    <Footer>
      <ContentBox alignment="start" css={{ '@md': { display: 'none' } }}>
        <CopyrightText>CDC® MIT</CopyrightText>
        <CursorData />
      </ContentBox>

      <ContentBox alignment="center">
        <Flex css={{ flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center', margin: 'auto' }}>
          <PassLink href={twitter} target={'_blank'}>
            <Icxn variant={'Twitter'} />
          </PassLink>

          <PassLink href={github} target={'_blank'}>
            <Icxn variant={'GitHub'} />
          </PassLink>
          <PassLink href={are_na} target={'_blank'}>
            <Icxn variant={'Are.na'} />
          </PassLink>
        </Flex>
      </ContentBox>

      <ContentBox alignment="end" css={{}}>
        <ThemeSwitch />
      </ContentBox>
    </Footer>
  );
};

const CopyrightText = styled('span', {
  fontSize: 12,
  color: theme.colors.chxn3,
  textAlign: 'center',
  fontFamily: theme.fonts.mono,
  fontWeight: 500,

  lineHeight: 'auto',
  letterSpacing: 'normal',
  textTransform: 'uppercase',
  margin: 0,
  marginRight: 10
});

const ContentBox = styled('div', {
  display: 'flex',
  width: '100%',
  marginTop: 3,
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
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  backgroundColor: 'transparent',
  '@md': {
    padding: 5,
    flexDirection: 'column-reverse',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const Footer = StyledFooter;
