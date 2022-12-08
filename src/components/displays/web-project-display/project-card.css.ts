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
  transition: 'all 0.5s ease-in-out',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',

  width: '100%',
  height: '100%',
  minHeight: 360,
  minWidth: 280,

  borderRadius: 16,
  margin: 'auto',
  alignItems: 'left',
  backgroundColor: theme.colors.slateA2,
  //boxShadow: `0px 4px 2px rgba(0, 0, 0, 0.1)`,
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
    transition: 'all 0.2s ease-in-out',
    cursor: 'grab',
    boxShadow: `inset 0 0 1px 1px $colors$mauveA8`
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
  fontSize: 13,
  color: theme.colors.chxn4,
  lineHeight: '1.5',

  '@sm': {
    fontSize: 16
  }
});

const TitleStyles = styled('h3', {
  transition: 'all 0.4s ease-in-out',
  fontSize: 24,
  fontFamily: theme.fonts.latBoldExtd,
  fontWeight: 'bold',
  textTransform: 'lowercase',
  color: theme.colors.heliotrope,
  '&:hover': { color: theme.colors.portage }
});

const ButtonStyles = styled(PassLink, {
  backgroundColor: 'transparent',
  fontFamily: theme.fonts.mono,
  fontSize: 12,
  fontWeight: 600,

  textAlign: 'left',
  '&:hover': {
    color: theme.colors.mauve11,
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
