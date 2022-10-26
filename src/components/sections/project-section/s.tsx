import { styled } from 'stitches.config';

const StyledProjectBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 20,
  border: '1px solid $sage8',
  borderRadius: 6,
  marginBottom: 5,
  width: '100%',

  '&:hover': {
    backgroundColor: '$sage4'
  }
});

const StyledProjectTitle = styled('a', {
  fontSize: 18,
  fontFamily: '$neueMontreal',
  fontWeight: 'normal',
  lineHeight: '1.3',
  color: '$slate11'
});

const StyledProjectDescription = styled('p', {
  fontSize: 14,
  fontFamily: '$neueMontreal',
  lineHeight: '1.6',
  color: '$slate10'
});

export const ProjectBox = StyledProjectBox;
export const ProjectTitle = StyledProjectTitle;
export const ProjectDescription = StyledProjectDescription;
