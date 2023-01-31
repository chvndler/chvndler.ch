/** @format */

import {styled, theme} from 'stitches.config'

import {FilmProjects} from '@/components/displays/film'
import {Container, Space} from '@/components/ds'
import {PageLayout} from '@/components/layout/page'

const FilmPage = () => {
  return (
    <>
      <PageLayout page_type={'Production'}>
        <Container size={'3'}>
          <Heading>© CDC FILM</Heading>
          <Space size={'1'} />
          <SubHeading>EVERYTHING ON THIS PAGE IS SHOT, EDITED, AND DIRECTED BY ME.</SubHeading>
          <SubHeading>SHOT ON LOCATION AROUND THE GLOBE©.</SubHeading>
        </Container>
        <Space size={'3'} />
        <FilmProjects />
      </PageLayout>
    </>
  )
}

export default FilmPage

const Heading = styled('h1', {
  color: theme.colors.slateA8,
  fontFamily: theme.fonts.latMedExtd,
  fontSize: 13,
  textAlign: 'center',
  fontWeight: 500,
  lineHeight: 'auto',

  '@sm': {textAlign: 'left'}
})

const SubHeading = styled('h1', {
  textAlign: 'center',
  color: theme.colors.chxn4A,
  fontSize: 12,
  fontFamily: theme.fonts.latMedStd,
  fontWeight: 'auto',
  textTransform: 'uppercase',
  lineHeight: 'auto',

  '@sm': {textAlign: 'left'}
})
