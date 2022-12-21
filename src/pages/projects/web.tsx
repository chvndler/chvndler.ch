/** @format */

import {styled, theme} from 'stitches.config'

import {WebProjectDisplay} from '@/components/displays/web'
import {Container, Space} from '@/components/ds'
import {PageLayout} from '@/components/layout/page'

const Web = () => {
  return (
    <>
      <PageLayout page_type={'CoverPage'}>
        <Container size={'2'} css={{}}>
          <WebTitle>© MIT WEB PROJECTS</WebTitle>
        </Container>
        <Space size={'2'} />
        <WebProjectDisplay />
      </PageLayout>
    </>
  )
}

export default Web

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
