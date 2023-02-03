/** @format */

import {styled, theme} from 'stitches.config'

import {FilmDisplay} from '@/components/displays/film'
import {Container, Space} from '@/components/ds'
import {PageLayout} from '@/components/layout/page'

const Film = () => {
  return (
    <>
      <PageLayout page_type={'CoverPage'}>
        <Container size={'2'} css={{}}>
          <WebTitle>© MIT FILM PROJECTS</WebTitle>
        </Container>
        <Space size={'2'} />
        <FilmDisplay />
      </PageLayout>
    </>
  )
}

export default Film

const styleTitle = styled('h1', {
  textAlign: 'center',
  color: '$chxn4',
  fontSize: 13,
  fontFamily: theme.fonts.latMedExtd,
  fontWeight: 500,
  lineHeight: 'auto',
  letterSpacing: ''
})

const WebTitle = styleTitle
