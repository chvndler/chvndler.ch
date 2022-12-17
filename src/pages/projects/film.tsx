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
     <SubHeading>SHOT ON LOCATION AROUND THE GLOBE©.</SubHeading>
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
 color: theme.colors.chxn4A,
 fontSize: 15,
 fontFamily: theme.fonts.latMedStd,
 fontWeight: 'auto',
 textTransform: 'uppercase',
 lineHeight: 'auto'
})
