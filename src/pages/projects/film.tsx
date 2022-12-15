/** @format */

import {styled, theme} from 'stitches.config'

import {FilmProjects} from '@/components/displays/film'
import {Container, Space} from '@/components/ds'
import {PageLayout} from '@/components/layout/page'

const Film = () => {
 return (
  <>
   <PageLayout page_type={'Production'}>
    <Container size={'3'} css={{}}>
     <Heading>© MIT FILM PROJECTS</Heading>
     <Space size={'1'} />
     <SubHeading>My film projects will live here soon.</SubHeading>
     <SubHeading>
      Here are two for now, while i'm working on some bugs.
     </SubHeading>
    </Container>
    <Space size={'3'} />
    <FilmProjects />
   </PageLayout>
  </>
 )
}

export default Film

const Heading = styled('h1', {
 color: theme.colors.slateA6,
 fontFamily: theme.fonts.latMedExtd,
 fontSize: 13,
 textAlign: 'center',
 fontWeight: 500,
 lineHeight: 'auto'
})

const SubHeading = styled('h1', {
 textAlign: 'center',
 color: theme.colors.chxn4,
 fontSize: 15,
 fontFamily: theme.fonts.panSb,
 fontWeight: 'auto',
 lineHeight: 'auto'
})
