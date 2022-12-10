import {css, styled, theme} from 'stitches.config'

const ProjectContainerStyles = css({
  /**
   * Testing border...
   */

  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  padding: '1rem',
  width: '100%',
  maxWidth: 800,
  height: 'auto',
  color: theme.colors.white,
})

const ProjectStyles = css({
  /**
   * Testing border...
   */

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  color: theme.colors.white,
})

const ProjectCardStyles = css({
  /**
   * Testing border...
   *
   */

  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'left',
  padding: 18,
  borderRadius: 8,
  margin: 'auto',
  height: 'auto',
  width: '100%',
})

const ProjectTitleStyles = css({
  color: theme.colors.chxn4,
  fontFamily: theme.fonts.sctoBold,
  fontSize: 22,
  fontWeight: 'normal',
  lineHeight: 'normal',
  marginBottom: 8,
  paddingLeft: 4,
  paddingRight: 4,
  paddingTop: 2,
  paddingBottom: 1,
  width: 'max-content',
  borderRadius: 6,

  '&:hover': {
    backgroundColor: theme.colors.slateA8,
    cursor: 'pointer',
  },
})

const ProjectDescriptionStyles = css({
  color: theme.colors.chxn5,
  fontFamily: theme.fonts.scto,
  fontSize: 16,
  fontWeight: 'normal',
  lineHeight: 'normal',
  paddingLeft: 4,
  paddingRight: 4,
})

export const ProjectDescription = styled('p', ProjectDescriptionStyles)
export const ProjectTitle = styled('p', ProjectTitleStyles)
export const ProjectCard = styled('div', ProjectCardStyles)
export const ProjectContainer = styled('div', ProjectContainerStyles)
export const Project = styled('div', ProjectStyles)
