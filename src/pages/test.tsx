import { Section } from '@/components/ds';
import { AppFooter } from '~/components/layout/app-footer';
import { PageLayout } from '~/components/layout/page';
import { Reveal } from '~/components/primitives/reveal';

const TestPage = () => {
  return (
    <>
      <PageLayout>
        <Section>
          <Reveal />
        </Section>
        <AppFooter />
      </PageLayout>
    </>
  );
};

export default TestPage;
