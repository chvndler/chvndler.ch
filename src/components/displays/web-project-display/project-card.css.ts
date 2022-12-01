import { styled, theme } from 'stitches.config';

import { Box, Card, PassLink } from '@/components/ds';

/*
    xs: '(max-width: 480px)',
    sm: '(max-width: 520px)',
    md: '(max-width: 740px)',
    lg: '(max-width: 860px)',
    xl: '(max-width: 1200px)',
    xxl: '(min-width: 1201px)',
*/

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
});

const CardStyles = styled(Card, {
  transition: 'all 0.3s ease-in-out',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',

  width: '100%',
  height: '100%',
  minHeight: 360,
  minWidth: 300,

  borderRadius: 32,
  margin: 'auto',
  alignItems: 'left',
  backgroundColor: theme.colors.slate6,
  boxShadow: `0px 1px 2px rgba(0, 0, 0, 0.08)`,
  /**
   *
   * @sm
   * enlarge the card
   * on small displays
   *
   */
  '@md': {
    maxHeight: 400,
    height: '100%',
    width: 'auto'
  },
  '@sm': {
    height: '100%',
    width: 'auto'
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
  padding: 38,

  '@md': {
    padding: 32
  },
  '@sm': {
    padding: 26
  }
});

const SummaryStyles = styled('p', {
  fontFamily: theme.fonts.system,
  fontWeight: 500,
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

const ButtonStyles = styled(PassLink, {
  backgroundColor: 'transparent',
  fontFamily: theme.fonts.latMedExtd,
  fontSize: 13,
  textAlign: 'left',
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
