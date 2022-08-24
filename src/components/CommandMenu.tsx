import { keyframes, styled } from '@/lib/stitches.config';
import { Command } from 'cmdk';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});


const StyledDialog = styled(Command.Dialog, {
  backgroundColor: '$mauve2',
  borderRadius: '18px',
  border: '1px solid $mauve7',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: 'auto',
  maxWidth: '600px',
  maxHeight: '85vh',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  overflow: 'scroll',

  '&:focus': { outline: 'none' },
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },


  '@sm': {
    position: 'relative',
    minHeight: '100vh',
    maxHeight: '100vh',
    height: '100%',
    maxWidth: '100vw',
    width: '100%',
    border: 'none',
    top: '0',
    bottom: '0',
    boxShadow: 'hsl(232, 13%, 45%) 0px 8px 15px 1px, hsl(206 22% 7% / 20%) 0px 0px 0px 0px',
  },
});

const StyledInput = styled(Command.Input, {
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  borderRadius: '11px',
  height: '38px',
  width: '100%',
  lineHeight: '$sizes$6',
  fontFamily: '$pragmaticaExtended',
  fontSize: '12px',
  fontWeight: '400',
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 2px $colors$mauve7',
  color: '$hiContrast',
  margin: 'auto',
  paddingRight: '10px',
  paddingLeft: '10px',
  paddingTop: '0',
  paddingBottom: '0',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  '&::placeholder': {
    color: '$mauve7',
    fontFamily: '$pragmaticaExtended',
    fontSize: '12px',
    fontWeight: '300',
    letterSpacing: 'normal',
    paddingLeft: '4px',
  },

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  '&:-webkit-autofill::first-line': {
    fontSize: '13px',
  },

  '&:focus': {
    backgroundColor: '$loContrast',
    boxShadow: 'inset 0px 0px 0px 1px $colors$sky7, 0px 0px 0px 1px $colors$sky8',
  },

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3',
  },

  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$slate2',
    color: '$slate8',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$slate7',
    },
  },

  '&:read-only': {
    backgroundColor: '$slate2',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$slate7',
    },
  },
});

const StyledList = styled(Command.List, {
  fontFamily: '$chGrotesk',
  fontWeight: '500',
  fontSize: '14px',
  letterSpacing: 'normal',
  backgroundColor: 'transparent',
  color: '$mauve12',
  padding: 0,

  minHeight: '300px',
  height: 'auto',
  maxHeight: '500px',
  transition: 'height 100ms ease',

  marginTop: '8px',
  marginBottom: '8px',
});

const StyledNoResults = styled(Command.Empty, {
  backgroundColor: 'transparent',
  borderRadius: '11px',
  border: '0.4px solid $mauve7',
  textAlign: 'left',
  color: '$mauve10',
  fontFamily: '$inter',
  fontWeight: '400',
  fontSize: '13px',
  letterSpacing: '0.01rem',
  lineHeight: '25px',

  padding: '8px 14px 8px 14px',
  width: '100%',

  marginTop: '8px',
});

const StyledGroup = styled(Command.Group, {
  backgroundColor: 'transparent',
  color: '$mauve12',
  lineHeight: '28px',
  overflowY: 'scroll',

  maxHeight: '190px',
  height: 'auto',
});

const StyledItem = styled(Command.Item, {
  backgroundColor: 'transparent',
  color: '$mauve9',
  borderRadius: '6px',
  fontFamily: '$chGrotesk',
  fontWeight: '500',
  fontSize: '13px',
  letterSpacing: 'normal',
  lineHeight: '28px',

  padding: '0px 14px 0px 14px',

  userSelect: 'none',
  willChange: 'background, color',
  transition: 'all 150ms ease',
  transitionProperty: 'none',
});

const StyledSeparator = styled(Command.Separator, {
  backgroundColor: '$mauve4',
  width: '100%',
  height: '1px',
  marginTop: '6px',
  marginBottom: '6px',
  padding: 0,
});

/**
 * pass exports to Cmndk();
 * '@/components/CmndK..'
 */

/**
 * exports...
 */
export const CommandDialog = StyledDialog;
export const CommandInput = StyledInput;
export const CommandEmpty = StyledNoResults;
export const CommandGroup = StyledGroup;
export const CommandList = StyledList;
export const CommandItem = StyledItem;
export const CommandSeparator = StyledSeparator;
