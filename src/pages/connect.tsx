import { styled, theme } from 'stitches.config';

import { Container, PassLink, Section, Space } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { SocialLinkDisplay } from '@/components/primitives/social-link-display';

const ConnectPage = () => {
  return (
    <>
      <PageLayout page_type={'CoverPage'}>
        <Section size={'4'}>
          <Container size={'3'}>
            <ConnectText>connect.</ConnectText>

            <PassLink href={'mailto:chvndler.ch@icloud.com'}>
              <LinkText>chvndler.ch@icloud.com</LinkText>
            </PassLink>
          </Container>

          <Space size={'2'} />
          <Container size={'3'}>
            <ParaText>I am currently seeking my next role.</ParaText>
          </Container>
        </Section>
        <Space size={'2'} />
        <SocialLinkDisplay />
      </PageLayout>
    </>
  );
};

export default ConnectPage;

const ConnectText = styled('h1', {
  fontFamily: theme.fonts.latBoldExtd,
  color: theme.colors.tartOrange,
  textAlign: 'left',
  fontSize: 22
});

const LinkText = styled('span', {
  fontFamily: theme.fonts.panMd,
  color: theme.colors.chxn3,
  fontSize: 16,
  textAlign: 'left',
  lineHeight: '1',

  '&:hover': {
    textDecoration: 'underline'
  }
});

const ParaText = styled('span', {
  fontFamily: theme.fonts.neue,
  color: theme.colors.chxn4,
  fontSize: 20,
  textAlign: 'left',
  lineHeight: '1',

  '@md': {
    fontSize: 18
  }
});
