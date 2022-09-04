import { styled } from '@/lib/stitches.config';

export const AppBar = styled('div', {
  boxSizing: 'border-box',
  zIndex: '9999',
  variants: {
    size: {
      '1': {
        paddingTop: 5,
        paddingBottom: 5,
      },
      '2': {
        paddingTop: 10,
        paddingBottom: 10,
      },
      '3': {
        paddingTop: 20,
        paddingBottom: 20,
      },
    },
    fixed: {
      true: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        paddingLeft: 12,
        paddingRight: 12,
      },
    },
    sticky: {
      true: {
        position: 'sticky',
        width: '100%',
        top: 0,
        left: 0,
      },
    },
    glass: {
      true: {
        backgroundColor: '$colors$blur',
        backdropFilter: 'saturate(140%) blur(14px)',
        WebkitBackdropFilter: 'saturate(140%) blur(14px)',
      },
    },
    border: {
      true: {
        borderBottom: '1px solid',
        borderColor: '$mauve3',
      },
    },
    color: {
      loContrast: {
        backgroundColor: '$loContrast',
      },
      plain: {
        backgroundColor: '$gray2',
      },
      accent: {
        backgroundColor: '$blue9',
      },
      transparent: {
        backgroundColor: 'transparent',
      },
    },
  },
  compoundVariants: [
    {
      glass: 'true',
      color: 'plain',
      css: {
        opacity: '.9',
      },
    },
    {
      glass: 'true',
      color: 'accent',
      css: {
        opacity: '.9',
      },
    },
    {
      glass: 'true',
      color: 'loContrast',
      css: {
        opacity: '.9',
      },
    },
    {
      border: 'true',
      color: 'plain',
      css: {
        borderColor: '$slate6',
      },
    },
    {
      border: 'true',
      color: 'accent',
      css: {
        borderColor: '$blue11',
      },
    },
    {
      border: 'true',
      color: 'loContrast',
      css: {
        borderColor: '$slate6',
      },
    },
  ],
  defaultVariants: {
    size: '1',
    color: 'transparent',
  },
});
