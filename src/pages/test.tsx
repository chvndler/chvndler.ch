import { Container, Section } from '@/components/ds';
import { AppFooter } from '~/components/layout/app-footer';
import { PageLayout } from '~/components/layout/page';
import { DownloadButton } from '~/components/primitives/download-button';

const TestPage = () => {
  return (
    <>
      <PageLayout>
        <Section>
          <Container
            size="2"
            css={{ margin: 'auto', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
          >
            <DownloadButton />
          </Container>
        </Section>
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default TestPage;
