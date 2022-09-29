import Link from 'next/link';

import { Box, Canvas, Container, Flex, InlineLink, Paragraph, Space, Text } from '@/components/ds';
import { Icxn } from '@/components/icons/icxn';
import { PageLayout } from '@/components/layout/page';
import { HeroSection } from '@/components/sections/hero';

const HomePage = () => {
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
                gap: 5,
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
              <ProjectLink />
            </Flex>
          </Container>
        </HeroSection>
      </Canvas>
    </PageLayout>
  );
};

export default HomePage;

// Components...

const HeadingHero = () => {
  return (
    <>
      <Text
        css={{
          fontSize: '0.8rem',
          fontFamily: '$telegraf',
          color: '$chxn5',
          fontWeight: 'bold',
          letterSpacing: 'normal',
          lineHeight: '1',
          padding: 0,
          margin: 0,
          width: 'auto',
          opacity: '0.04',
          '@md': {
            fontSize: '1rem',
            letterSpacing: '-0.05rem',
            lineHeight: '1'
          }
        }}
      >
        CHANDLER CHAPPELL
      </Text>
      <Text
        css={{
          fontSize: '1rem',
          fontFamily: '$telegraf',
          color: '$chxn5',
          fontWeight: 'bold',
          letterSpacing: 'normal',
          lineHeight: '30px',
          padding: 10,
          margin: 0,
          width: 'auto',
          '@md': {
            fontSize: '1rem',
            letterSpacing: '-0.05rem',
            lineHeight: '30px'
          }
        }}
      >
        Front-end Developer & Director
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
          fontWeight: 'normal',
          lineHeight: '22px',
          color: '$chxn3',
          textTransform: 'uppercase',
          letterSpacing: '0.04rem',
          '@sm': {
            fontSize: 16,
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
      <Box css={{ lineHeight: '15px' }}>
        <Icxn variant="Twitter" />
      </Box>

      <Link href="https://twitter.com/chvndlerch" passHref>
        <Text
          as="a"
          css={{
            // backgroundColor: '$twitter',
            fontSize: 14,
            fontFamily: '$telegraf',
            color: '$twitter',
            fontWeight: '600',
            lineHeight: '15px',
            letterSpacing: '-0.04rem',
            marginRight: 10,
            '&:hover': {
              color: '$chxn4'
            }
          }}
        >
          twitter
        </Text>
      </Link>
    </>
  );
};

const GitHubLink = () => {
  return (
    <>
      <Box css={{ lineHeight: '15px' }}>
        <Icxn variant="GitHub" />
      </Box>

      <Link href="https://github.com/chvndler" passHref>
        <Text
          as="a"
          css={{
            // backgroundColor: '$twitter',
            fontSize: 14,
            fontFamily: '$telegraf',
            color: '$chxn3',
            fontWeight: '600',
            lineHeight: '15px',
            letterSpacing: '-0.04rem',
            marginRight: 10,
            '&:hover': {
              color: '$chxn4'
            }
          }}
        >
          github
        </Text>
      </Link>
    </>
  );
};

const ProjectLink = () => {
  return (
    <>
      <Box css={{ lineHeight: '15px' }}>
        <Icxn variant="Project" />
      </Box>

      <Link href="/projects" passHref>
        <Text
          as="a"
          css={{
            // backgroundColor: '$twitter',
            fontSize: 14,
            fontFamily: '$telegraf',
            color: '$chxn9',
            fontWeight: '600',
            lineHeight: '15px',
            letterSpacing: '-0.04rem',
            marginRight: 0,
            '&:hover': {
              color: '$chxn4'
            }
          }}
        >
          projexts
        </Text>
      </Link>
    </>
  );
};
