import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { styled } from 'stitches.config';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$gray4',
  borderRadius: 9999,
  borderColor: 'inherit',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },

  variants: {
    size: {
      auto: {
        '&[data-orientation=horizontal]': { height: 1, width: '40px' },
        '&[data-orientation=vertical]': { height: 'auto', width: 1 }
      },
      '1': {
        '&[data-orientation=horizontal]': { height: 1, width: '100%' },
        '&[data-orientation=vertical]': { height: '100%', width: 1 }
      },
      '2': {
        '&[data-orientation=horizontal]': { height: 2, width: '100%' },
        '&[data-orientation=vertical]': { height: '100%', width: 2 }
      },
      '3': {
        '&[data-orientation=horizontal]': { height: 3, width: '100%' },
        '&[data-orientation=vertical]': { height: '100%', width: 3 }
      }
    },
    color: {
      lime: { backgroundColor: '$lime9' },
      mauve: { backgroundColor: '$mauve8' },
      sage: { backgroundColor: '$sage8' },
      gray: { backgroundColor: '$gray9' }
    },
    fill: {
      solid: {},
      dotted: {
        borderTop: '1px dashed $sage8',
        backgroundColor: 'transparent'
      }
    }
  },
  defaultVariants: {
    size: '1',
    color: 'gray',
    fill: 'solid'
  }
});

// Exports
export const Separator = StyledSeparator;
