import { css, keyframes, styled } from 'stitches.config';

const pulse = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: '100%' }
});

const SkeletonStyles = css({
  backgroundColor: '$gray4',
  position: 'relative',
  overflow: 'hidden',

  '&::after': {
    animationName: `${pulse}`,
    animationDuration: '500ms',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: '$slate6',
    borderRadius: 'inherit',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },

  variants: {
    variant: {
      avatar1: {
        borderRadius: '$round',
        height: '$3',
        width: '$3'
      },
      avatar2: {
        borderRadius: '$round',
        height: '$5',
        width: '$5'
      },
      avatar3: {
        borderRadius: '$round',
        height: '$6',
        width: '$6'
      },
      avatar4: {
        borderRadius: '$round',
        height: '$7',
        width: '$7'
      },
      avatar5: {
        borderRadius: '$round',
        height: '$8',
        width: '$8'
      },
      avatar6: {
        borderRadius: '$round',
        height: '$9',
        width: '$9'
      },
      title: {
        borderRadius: 3,
        backgroundColor: '$mauve5',
        height: '45px',
        maxWidth: '200px',
        width: '30%',
        marginTop: 2,
        marginBottom: 20
      },
      heading: {
        borderRadius: 3,
        backgroundColor: '$mauve5',
        height: '30px',
        maxWidth: '300px',
        width: '50%',
        marginTop: 2,
        marginBottom: 16
      },
      text: {
        borderRadius: 2,
        backgroundColor: '$mauve5',
        height: '6px',
        width: '100%',
        marginTop: 8,
        marginBottom: 8
      },
      shortText: {
        borderRadius: 2,
        backgroundColor: '$mauve5',
        height: '6px',
        maxWidth: '80%',
        width: '60%',
        marginTop: 8,
        marginBottom: 8
      },
      button: {
        borderRadius: 6,
        height: '$5',
        width: '$9',
        marginTop: 14,
        marginBottom: 14
      }
    }
  },
  defaultVariants: {
    variant: 'text'
  }
});

export const Skeleton = styled('div', SkeletonStyles);
