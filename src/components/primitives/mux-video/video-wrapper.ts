import { css, styled } from 'stitches.config';

const VideoWrapperStyles = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  right: 0,
  bottom: 0,
  zIndex: 9999999,
  margin: 0,
  padding: 0,
  objectFit: 'cover',
  minWidth: '100vw',
  minHeight: '100vh',
  overflow: 'hidden',
  overflowX: 'hidden',
  overflowY: 'hidden',

  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  objectPosition: 'center'
});

export const VideoStyles = css('video', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  right: 0,
  bottom: 0,
  zIndex: 9999999,
  minWidth: '100vw',
  minHeight: '100vh',
  overflow: 'hidden',
  overflowX: 'hidden',
  overflowY: 'hidden',

  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  objectFit: 'cover',
  objectPosition: 'center',
  margin: 0,
  padding: 0,
  border: 'none',
  outline: 'none',
  display: 'block',
  opacity: 1,
  transition: 'opacity 0.5s ease-in-out'
});
export const VideoWrapper = styled('div', VideoWrapperStyles);
