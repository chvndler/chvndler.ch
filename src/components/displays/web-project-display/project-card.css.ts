import { styled, theme } from 'stitches.config';

import { Box, Button, Card } from '@/components/ds';

const SectionCropStyles = styled('div', {
  overflow: 'hidden',
  overflowX: 'scroll',
  display: 'block',
  scrollSnapType: 'x mandatory',
  scrollBehavior: 'smooth',
  scrollPadding: '0 0 0 0',
  position: 'relative',
  width: '100%',
  height: 'auto',

  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 0,
  paddingRight: 0,
  margin: 'auto'

  //border: '1px solid red'
});

const CardStyles = styled(Card, {
  transition: 'all 0.3s ease-in-out',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',

  width: 'auto',
  height: '100%',
  //minWidth: 400,
  //maxWidth: 400,
  //minHeight: 500,
  //maxHeight: 500,

  borderRadius: 32,
  margin: 'auto',
  alignItems: 'left',
  backgroundColor: theme.colors.white,
  boxShadow: `2px 4px 12px rgba(0, 0, 0, 0.08)`,
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
    // transition: 'all 0.3s ease-in-out',
    // cursor: 'grab'
    // boxShadow: `inset 0 0 3px 1px $colors$mauveA8`
    // borderRadius: 24
  }
});

const PlacementBoxStyles = styled('div', Box, {
  zIndex: 99,
  position: 'absolute',
  top: 20,
  padding: 42
});

const SummaryStyles = styled('p', {
  fontFamily: theme.fonts.panSb,
  fontSize: 14,
  color: theme.colors.sage10,
  lineHeight: '1.3',

  '@sm': {
    fontSize: 16
  }
});

const TitleStyles = styled('h3', {
  fontSize: 32,
  // fontFamily: '"Lateral Extended Bold", sans-serif',
  fontFamily: theme.fonts.system,
  fontWeight: 'bold',
  color: theme.colors.chxn5
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
  position: 'relative',
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  borderRadius: 32,
  backgroundColor: 'transparent'
  /*
  '&:hover': {
    backdropFilter: 'blur(40px) saturate(200%)',
    WebkitBackdropFilter: 'blur(40px) saturate(200%)'
  }
*/
});

export const SectionCrop = SectionCropStyles;
export const ProjectCard = CardStyles;
export const PlacementBox = PlacementBoxStyles;
export const ProjectSummary = SummaryStyles;
export const ProjectTitle = TitleStyles;
export const ProjectButton = ButtonStyles;

export const ImageOverlay = Overlay;
