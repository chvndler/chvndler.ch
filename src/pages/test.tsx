import { Section } from '@/components/ds';
import { AppFooter } from '~/components/layout/app-footer';
import { PageLayout } from '~/components/layout/page';
import { GlowButton } from '~/components/primitives/glow-button';
import { Reveal } from '~/components/primitives/reveal';

const TestPage = () => {
  return (
    <>
      <PageLayout>
        <Section>
          <Reveal />
        </Section>

        <Section>
          <GlowButton>Glow button</GlowButton>
        </Section>
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default TestPage;
