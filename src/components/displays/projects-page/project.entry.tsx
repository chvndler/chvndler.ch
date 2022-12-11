import {styled, theme} from 'stitches.config'

import {Box, PassLink} from '@/components/ds'

type ProjectProps = {
  title: string
  summary: string
  link: string
}

const StyledProjectDiv = styled(Box, {
  boxSizing: 'border-box',
  maxWidth: '480px',
  width: '100%',
  paddingTop: 8,
  paddingBottom: 8,
  paddingRight: 4,
  paddingLeft: 4,
  marginBottom: 20,
  marginTop: 20,
  backgroundColor: 'transparent',
  /**
   * @testing
   * border: `1px solid ${theme.colors.chxn3}`
   */
})

const StyledTitle = styled('div', {
  boxSizing: 'border-box',
  padding: 4,
  margin: 0,
  fontFamily: theme.fonts.mono,
  fontSize: 13,
  fontWeight: 300,
  color: theme.colors.chxn3,
  textAlign: 'left',
  lineHeight: '14px',
})

const StyledSummary = styled('div', {
  boxSizing: 'border-box',
  padding: 4,
  margin: 0,
  fontFamily: theme.fonts.mono,
  fontSize: 13,
  fontWeight: 400,
  color: theme.colors.chxn4,
  textAlign: 'left',
  letterSpacing: 'normal',
})

const StyledLink = styled(PassLink, {
  boxSizing: 'border-box',
})

const ProjectDiv = StyledProjectDiv
const ProjectSummary = StyledSummary
const ProjectTitle = StyledTitle
const ProjectLink = StyledLink

const Project = ({title, summary, link, ...props}: ProjectProps) => {
  return (
    <>
      <ProjectDiv>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectSummary>{summary}</ProjectSummary>
        <ProjectLink href={link} {...props}>
          Link
        </ProjectLink>
      </ProjectDiv>
    </>
  )
}

export const ProjectEntry = Project
