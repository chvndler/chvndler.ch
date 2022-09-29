import { styled } from 'stitches.config';
import { CDCLogo } from '@/components/logos/cdc';

const StyledBar = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 4,
  margin: 'auto',
  position: 'fixed',
  top: 16,
  left: 0,
  right: 0,
  width: '100%',
  maxWidth: '400px',
  border: '1px solid transparent',
  borderRadius: 16,
  backgroundColor: 'transparent',
  backdropFilter: 'blur(30px)',
  WebkitBackdropFilter: 'blur(30px)',
  lineHeight: '23px',
  height: 48
});

const NavButton = styled('a', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',

  height: '38px',
  fontSize: 15,
  fontWeight: 'normal',
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
    color: '$tartOrange',
    backgroundColor: '$blur'
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

  '&:hover': {
    color: '$tartOrange'
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

export const AppNav = StyledBar;

export const AppBar = () => {
  return (
    <>
      <AppNav>
        <ContentBox alignment="start">
          <NavButton as="a" href="/projects">
            Projects
          </NavButton>
        </ContentBox>

        <ContentBox alignment="center">
          <CDCLogo />
        </ContentBox>

        <ContentBox alignment="end">
          <NavButton as="a" href="/projects">
            Notes
          </NavButton>
        </ContentBox>
      </AppNav>
    </>
  );
};
