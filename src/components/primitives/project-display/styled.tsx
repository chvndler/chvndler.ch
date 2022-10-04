import { styled } from 'stitches.config';

const StyledIcxn = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 0,
  padding: 20
});

const StyledProjectDetails = styled('div', {
  boxSizing: 'content-box',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  textAlign: 'left',
  padding: 26,
  margin: 'auto',
  bottom: 10,
  left: 0
});

const StyledTitle = styled('div', {
  position: 'relative',
  fontSize: 18,
  fontFamily: '$neueMontreal',
  fontWeight: '500',
  lineHeight: '40px',
  textAlign: 'left',
  padding: 0,
  margin: 0,

  color: '$chxn3'
});

const StyledDescription = styled('p', {
  position: 'relative',
  fontSize: 15,
  fontFamily: '$neueMontreal',
  fontWeight: '500',
  lineHeight: '20px',
  textAlign: 'left',
  padding: 0,
  margin: 0,

  color: '$chxn4'
});

const StyledSvg = styled('div', {
  paddingBottom: 18
});

export const IfIcxn = StyledIcxn;
export const ProjectDetails = StyledProjectDetails;
export const Title = StyledTitle;
export const Description = StyledDescription;
export const Svg = StyledSvg;
