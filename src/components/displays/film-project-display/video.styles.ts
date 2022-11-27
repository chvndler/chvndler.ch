import { css, styled, theme } from 'stitches.config';

const VideoWrapperStyles = css({
  boxSizing: 'border-box',
  position: 'relative',
  width: '100%',
  height: 'auto',
  margin: 0,
  padding: 0,

  borderRadius: 0
});

export const MuxVideoStyles = css('video', {
  zIndex: 1,
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  overflowX: 'hidden',
  overflowY: 'hidden',

  borderRadius: 0,

  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  objectFit: 'cover',
  objectPosition: 'center',
  margin: 0,
  padding: 0,
  outline: 'none',
  display: 'block',
  opacity: 1,
  transition: 'opacity 0.5s ease-in-out'

  // border: '2px solid black',
});

const CaptionTitleStyles = css({
  fontFamily: theme.fonts.panB,
  fontSize: 16,
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: 'auto',
  height: 'auto',
  margin: 0,
  padding: 0
});

const CaptionOtherStyles = css({
  fontFamily: theme.fonts.scto,
  fontSize: 14,
  color: theme.colors.chxn3,
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: 'auto',
  height: 'auto',
  margin: 0,
  padding: 0
});

export const VideoWrapper = styled('div', VideoWrapperStyles);
export const CaptionTitle = styled('div', CaptionTitleStyles);
export const CaptionOther = styled('div', CaptionOtherStyles);
