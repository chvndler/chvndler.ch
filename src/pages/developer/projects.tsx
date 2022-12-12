import {ProjectIndex} from '@/components/displays/projects-page'
import {Button, Container, Space, Text} from '@/components/ds'
import {PageLayout} from '@/components/layout/page'

const github = 'https://github.com/chvndler'

const WebProjectsPage = () => {
  return (
    <>
      <PageLayout page_type={'CoverPage'}>
        <Container size={'2'} css={{margin: 'auto', display: 'flex', alignItems: 'center'}}>
          <Button as={'a'} href={github} size={'1'} target={'_blank'} rel={'norefferer'}>
            View GitHub
          </Button>
          <Space size={'1'} />
          <Text
            css={{
              textAlign: 'center',
              color: '$chxn4',
              fontSize: 11,
              fontFamily: '"Lateral Extended Regular", sans-serif',
              fontWeight: 500,
              lineHeight: 'auto',
              letterSpacing: '',
            }}>
            LICENSE © MIT
          </Text>
        </Container>
        <Space size={'2'} />

        <ProjectIndex />
      </PageLayout>
    </>
  )
}

export default WebProjectsPage
