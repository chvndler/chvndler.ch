import { Container, Heading, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { PassLink } from '@/components/primitives/pass-link';
import { HeroSection } from '@/components/sections/hero';
import { Avatar } from '~/components/primitives/avatar';
import { TimeCode } from '~/components/primitives/time-code';
import { ThemeToggle } from '~/components/primitives/ui-switch/theme-toggle';

const EnterPage = () => {
  return (
    <PageLayout>
      <HeroSection size="1" color="default" alignment="responsiveLeft" css={{ padding: 0 }}>
        <Container size="1" css={{ padding: 20, paddingTop: '100px' }}>
          <Heading size="1" as="h1" css={{ textAlign: 'center', color: '$sage9' }}>
            Components
          </Heading>
        </Container>
        <Container size="1" css={{ padding: 20, paddingTop: '100px' }}>
          <Text css={{ fontSize: 12, textAlign: 'left', lineHeight: '3' }}>Avatar</Text>
          <Avatar src="/images/web.gif" size="3" />
        </Container>
        <Container size="1" css={{ padding: 20 }}>
          <Text css={{ fontSize: 12, textAlign: 'left', lineHeight: '3' }}>Theme Toggle</Text>
          <ThemeToggle />
        </Container>

        <Container size="1" css={{ padding: 20 }}>
          <Text css={{ fontSize: 12, textAlign: 'left', lineHeight: '3' }}>TimeCode</Text>
          <TimeCode />
        </Container>

        <Container size="1" css={{ padding: 20 }}>
          <Text css={{ fontSize: 12, textAlign: 'left', lineHeight: '3' }}>Pass-link</Text>
          <PassLink href="/">ONE</PassLink>
        </Container>
      </HeroSection>
    </PageLayout>
  );
};

export default EnterPage;
