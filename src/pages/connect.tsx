import { Container, Section, Text } from '@/components/ds';
import { AppFooter } from '@/components/layout/app-footer';
import { PageLayout } from '@/components/layout/page';

const ConnectPage = () => {
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
              connect
            </Text>
          </Container>
        </Section>
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default ConnectPage;
