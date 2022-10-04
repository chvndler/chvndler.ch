import { styled } from 'stitches.config';

import { CDCLogo } from '@/components/logos/cdc';
import { PassLink } from '@/components/primitives/pass-link';

const StyledNavContainer = styled('div', {
  boxSizing: 'border-box',
  display: 'block',
  transform: 'translateY(0px) translateX(-50%)',
  WebkitFontSmoothing: 'antialiased',
  position: 'fixed',
  top: '1rem',
  width: 'calc(100% - 2rem)',
  maxWidth: '400px',
  left: '50%',
  zIndex: 99999
});

const StyledBar = styled('div', {
  boxSizing: 'border-box',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 4,
  margin: 'auto',
  position: 'relative',
  width: '100%',
  borderRadius: 16,
  backgroundColor: 'transparent',
  backdropFilter: 'blur(80px)',
  WebkitBackdropFilter: 'blur(80px)',
  saturate: '180%',
  lineHeight: '23px',
  height: 48,
  border: '1px solid transparent'
});

const NavButton = styled('a', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',

  height: '38px',
  fontSize: 15,
  fontWeight: '600',
  fontFamily: '$neueMontreal',

  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontVariantNumeric: 'tabular-nums',

  margin: 0,
  borderRadius: 11,
  paddingLeft: '20px',
  paddingRight: '20px',
  lineHeight: '38px',

  border: '1px solid transparent',
  marginBottom: 2,
  width: 'auto',
  color: '$chxn4',

  '&:hover': {
    color: '$chxn4',
    backgroundColor: '$blur',
    cursor: 'pointer'
  },
  '&:active': {
    // backgroundColor: 'hsla(0,100%,100%,.3)'
  },
  '&:focus': {
    // boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)'
  },

  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none'
  }
});

const ContentBox = styled('div', {
  display: 'flex',
  width: '100%',
  margin: 'auto',
  padding: 0,
  color: '$chxn4',
  transition: 'color 0.4s ease',

  '&:hover': {
    color: '$maxBlue'
  },

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

export const NavContainer = StyledNavContainer;
export const AppNav = StyledBar;

export const AppBar = () => {
  return (
    <>
      <NavContainer>
        <AppNav>
          <ContentBox alignment="start">
            <NavButton as="a" href="/projects">
              Projects
            </NavButton>
          </ContentBox>

          <ContentBox alignment="center">
            <PassLink href="/ch">
              <CDCLogo />
            </PassLink>
          </ContentBox>

          <ContentBox alignment="end">
            <NavButton as="a" href="/notes">
              Notes
            </NavButton>
          </ContentBox>
        </AppNav>
      </NavContainer>
    </>
  );
};
