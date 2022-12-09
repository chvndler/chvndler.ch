import {ProjectIndex} from '@/components/displays/projects-page'
import {Container, Space, Text} from '@/components/ds'
import {PageLayout} from '@/components/layout/page'

const WebProjectsPage = () => {
  return (
    <>
      <PageLayout page_type={'CoverPage'}>
        <Container size={'2'} css={{}}>
          <Text
            css={{
              textAlign: 'center',
              color: '$chxn4',
              fontSize: 13,
              fontFamily: '"Lateral Extended Medium", sans-serif',
              fontWeight: 500,
              lineHeight: 'auto',
              letterSpacing: '',
            }}>
            © MIT WEB PROJECTS
          </Text>
        </Container>
        <Space size={'2'} />
        <ProjectIndex />
      </PageLayout>
    </>
  )
}

export default WebProjectsPage
