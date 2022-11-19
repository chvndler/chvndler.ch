import { Container, Section, Text } from '@/components/ds';
import { AppFooter } from '@/components/layout/app-footer';
import { PageLayout } from '@/components/layout/page';
import { PopoverComponent } from '@/components/primitives/popover';

const TestPage = () => {
  return (
    <>
      <PageLayout>
        <Section size={'4'}>
          <Container size={'4'}>
            <Text
              css={{
                color: '$chxn4',
                fontSize: 18,
                fontFamily: '"Lateral Extended Bold", sans-serif',
                fontWeight: 'bold'
              }}
            >
              developing
            </Text>
          </Container>

          <Container size={'4'}>
            <PopoverComponent />
          </Container>
        </Section>
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default TestPage;
