import { css, styled } from 'stitches.config';

const SmallVideoWrapperStyles = css({
  boxSizing: 'border-box',
  position: 'relative',
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,

  borderRadius: 26
});

const VideoWrapperStyles = css({
  position: 'relative',

  width: '100%',
  height: '100%',
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

export const SmallVideoStyles = css('video', {
  zIndex: 1,
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  overflowX: 'hidden',
  overflowY: 'hidden',

  borderRadius: 26,

  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  objectFit: 'cover',
  objectPosition: 'center',
  margin: 0,
  padding: 0,
  border: '2px solid black',
  outline: 'none',
  display: 'block',
  opacity: 1,
  transition: 'opacity 0.5s ease-in-out'
});
export const VideoWrapper = styled('div', VideoWrapperStyles);
export const SmallVideoWrapper = styled('div', SmallVideoWrapperStyles);
