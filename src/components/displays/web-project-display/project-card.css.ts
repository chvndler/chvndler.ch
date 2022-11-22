import { styled, theme } from 'stitches.config';

import { Box, Button, Card } from '@/components/ds';

const CardStyles = styled(Card, {
  transition: 'all 0.3s ease-in-out',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: 'auto',
  minHeight: 320,
  maxHeight: 320,
  height: '100%',
  borderRadius: 24,
  margin: 'auto',
  alignItems: 'left',
  backgroundColor: '$mauve2',
  /**
   *
   * @sm
   * enlarge the card
   * on small displays
   *
   */
  '@sm': {
    height: 420,
    maxHeight: 420
  },

  '&:hover': {
    transition: 'all 0.3s ease-in-out',
    cursor: 'grab',
    boxShadow: `inset 0 0 3px 1px $colors$mauveA8`
    // borderRadius: 24
  },

  '&::before': {
    borderRadius: 24,
    boxSizing: 'border-box',
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: `inset 0 0 0px 2px $colors$mauveA8`,
    pointerEvents: 'none'
  }
});

const PlacementBoxStyles = styled('div', Box, {
  zIndex: 99,
  position: 'absolute',
  bottom: 8,
  padding: 28
});

const SummaryStyles = styled('p', {
  fontFamily: '$lateralStandard',
  fontWeight: 'normal',
  fontSize: 14,
  color: '$sage9',
  lineHeight: '1.3',

  '@sm': {
    fontSize: 16
  }
});

const TitleStyles = styled('h3', {
  fontSize: 24,
  fontFamily: '"Lateral Extended Bold", sans-serif',
  fontWeight: 'bold',
  color: '$chxn4'
});

const ButtonStyles = styled(Button, {
  backgroundColor: '$chxn4',
  fontFamily: theme.fonts.panSb,
  fontSize: 12,
  '&:hover': {
    cursor: 'pointer'
  }
});

const Overlay = styled('div', {
  transition: 'all 0.3s ease-in-out',
  zIndex: 4,
  backgroundColor: '$slateA2',
  opacity: '0.3',
  position: 'relative',
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  borderRadius: 24,

  '&:hover': {
    opacity: '0.6'
  }
});

export const ProjectCard = CardStyles;
export const PlacementBox = PlacementBoxStyles;
export const ProjectSummary = SummaryStyles;
export const ProjectTitle = TitleStyles;
export const ProjectButton = ButtonStyles;

export const ImageOverlay = Overlay;
