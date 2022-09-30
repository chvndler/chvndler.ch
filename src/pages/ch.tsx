import Link from 'next/link';

import { Box, Canvas, Container, Flex, InlineLink, Paragraph, Space, Text } from '@/components/ds';
import { Icxn } from '@/components/icons/icxn';
import { PageLayout } from '@/components/layout/page';
import { HeroSection } from '@/components/sections/hero';

const Home = () => {
  return (
    <PageLayout>
      <Canvas>
        <HeroSection size="1" color="default" alignment="center" css={{ padding: 0 }}>
          <Container size="1" css={{ padding: 20 }}>
            <HeadingHero />
            <AboutParagraph />
            <Space size="2" />
            <Flex
              css={{
                width: '100%',
                flexDirection: 'row',
                gap: 6,
                display: 'inline-flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                '@md': {
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }}
            >
              <TwitterLink />
              <GitHubLink />
            </Flex>
          </Container>
        </HeroSection>
      </Canvas>
    </PageLayout>
  );
};

// Components...

const HeadingHero = () => {
  return (
    <>
      <Text
        css={{
          fontSize: '1.8rem',
          fontFamily: '$neueMontreal',
          color: '$chxn4',
          fontWeight: 'bold',
          letterSpacing: 'normal',
          lineHeight: '30px',
          padding: 10,
          margin: 0,
          width: 'auto',
          '@md': {
            fontSize: '1.5rem',
            letterSpacing: '-0.01rem',
            lineHeight: '30px'
          }
        }}
      >
        FRONT-END DEVELOPER
        {/* Front-end Developer & Director */}
      </Text>
    </>
  );
};

const AboutParagraph = () => {
  return (
    <>
      <Paragraph
        css={{
          fontFamily: '$neueMontreal',
          fontSize: 14,
          fontWeight: '500',
          lineHeight: '22px',
          color: '$chxn4',
          textTransform: 'uppercase',
          letterSpacing: '0.04rem',
          '@md': {
            fontSize: 14,
            lineHeight: '20px'
          }
        }}
      >
        The focus in the moment is building <InlineLink href="/">Atelier® Design</InlineLink>, to silence the noise in
        design culture. My passion is to build great online experiences, to change the world. <br />
        <br />
        Currently searching for my next role. <InlineLink href="/">Let's build</InlineLink>.
      </Paragraph>
    </>
  );
};

const TwitterLink = () => {
  return (
    <>
      <Box css={{ display: 'inline-flex', lineHeight: '16px', marginRight: 6 }}>
        <Box css={{ lineHeight: '15px', color: '$twitter', marginRight: 6 }}>
          <Icxn variant="Twitter" />
        </Box>

        <Link href="https://twitter.com/chvndlerch" passHref>
          <Text
            as="a"
            css={{
              // backgroundColor: '$twitter',
              fontSize: 14,
              fontFamily: '$aero',
              color: '$chxn4',
              fontWeight: '600',
              lineHeight: '15px',
              letterSpacing: '-0.04rem',
              '&:hover': {
                color: '$chxn3'
              }
            }}
          >
            twitter
          </Text>
        </Link>
      </Box>
    </>
  );
};

const GitHubLink = () => {
  return (
    <>
      <Box css={{ display: 'inline-flex', lineHeight: '16px', marginLeft: 6 }}>
        <Box css={{ lineHeight: '15px', color: '$github', marginRight: 6 }}>
          <Icxn variant="GitHub" />
        </Box>

        <Link href="https://github.com/chvndler" passHref>
          <Text
            as="a"
            css={{
              fontSize: 14,
              fontFamily: '$aero',
              color: '$chxn4',
              fontWeight: '600',
              lineHeight: '15px',
              letterSpacing: '-0.04rem',
              '&:hover': {
                color: '$chxn3'
              }
            }}
          >
            github
          </Text>
        </Link>
      </Box>
    </>
  );
};

export default Home;
