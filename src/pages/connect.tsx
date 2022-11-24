import { Container, PassLink, Section, Space, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { SocialLinkDisplay } from '@/components/primitives/social-link-display';

const ConnectPage = () => {
  return (
    <>
      <PageLayout page_type={'CoverPage'}>
        <Section size={'4'}>
          <Container size={'3'}>
            <Text
              css={{
                color: '#F05724',
                fontSize: 22,
                fontFamily: '"Lateral Extended Bold", sans-serif',
                fontWeight: 'bold'
              }}
            >
              connect.
            </Text>

            <PassLink href={'mailto:chvndler.ch@icloud.com'}>
              <Text
                css={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '$chxn3',
                  fontFamily: '"Lateral Extended Medium", sans-serif',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                chvndler.ch@icloud.com
              </Text>
            </PassLink>
          </Container>

          <Space size={'2'} />
          <Container size={'3'}>
            <Text
              css={{
                color: '$sage10',
                fontFamily: '"Lateral Standard Bold", sans-serif',
                fontSize: 52,
                fontWeight: 'bold',
                textAlign: 'left',
                letterSpacing: '-0.08rem',
                lineHeight: '50px',
                '@md': {
                  fontSize: 38,
                  lineHeight: '36px',
                  letterSpacing: '0rem'
                }
              }}
            >
              CONNECT WITH ME.
              <br />
              I AM CURRENTLY LOOKING
              <br />
              FOR MY NEXT ROLE.
            </Text>
          </Container>
        </Section>
        <Space size={'2'} />
        <SocialLinkDisplay />
      </PageLayout>
    </>
  );
};

export default ConnectPage;
