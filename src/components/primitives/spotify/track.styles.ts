import { css, styled, theme } from 'stitches.config';

const trackStyles = css({
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  margin: 'auto',
  padding: 0,
  gap: 8
});

const StyledTitle = css({
  font: theme.fonts.panB,
  fontSize: 18,
  color: theme.colors.chxn4,
  lineHeight: 1,
  letterSpacing: 0.2
});

const StyledArtist = css({
  font: theme.fonts.panMd,
  fontSize: 14,
  color: theme.colors.chxn3,
  lineHeight: 1,
  letterSpacing: 0.3
});

const StyledContainer = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '0 10px',
  boxSizing: 'border-box'
  // border: '1px solid red'
});

export const TrackBox = styled('div', trackStyles);
export const TrackTitle = styled('h3', StyledTitle);
export const TrackArtist = styled('span', StyledArtist);
export const TrackContainer = styled('div', StyledContainer);
