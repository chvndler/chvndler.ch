import Link from 'next/link';

import { Box, Canvas, Container, Flex, InlineLink, Paragraph, Space, Text } from '@/components/ds';
import { HeroSection } from '@/components/sections/hero';
import { Icxn } from '~/components/icons/icxn';

export const MainHero = () => {
  return (
    <Canvas>
      <HeroSection size="1" color="clear" alignment="center" css={{ padding: 0 }}>
        <Container size="1" css={{ padding: 20, backgroundColor: 'transparent' }}>
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
              justifyContent: 'flex-start',
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
  );
};

const AboutParagraph = () => {
  return (
    <>
      <Paragraph
        css={{
          textAlign: 'left',
          fontFamily: '$neueMontreal',
          fontSize: 16,
          fontWeight: 'normal',
          lineHeight: '22px',
          color: '$chxn4',
          // textTransform: 'uppercase',
          letterSpacing: '0.04rem',
          '@md': {
            fontSize: 16,
            lineHeight: '20px'
          }
        }}
      >
        The focus in the moment is building <InlineLink href="/">Atelier® Design</InlineLink>, to silence the noise in
        design culture. My passion is to make simple, beautiful and performant web experiences. <br />
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
