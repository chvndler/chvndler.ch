import { WebProjectDisplay } from '@/components/displays/web-project-display';
import { Container, Space, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';

const Web = () => {
  return (
    <>
      <PageLayout>
        <Container size={'3'} css={{}}>
          <Text
            css={{
              textAlign: 'center',
              color: '$chxn4',
              fontSize: 13,
              fontFamily: '"Lateral Extended Medium", sans-serif',
              fontWeight: 500,
              lineHeight: 'auto',
              letterSpacing: ''
            }}
          >
            © MIT WEB PROJECTS
          </Text>
        </Container>
        <Space size={'3'} />

        <WebProjectDisplay />
      </PageLayout>
    </>
  );
};

export default Web;
