import {
  Box,
  Container,
  Flex,
  InlineLink,
  MonoLink,
  Paragraph,
  Section,
  Separator,
  Space,
  Text
} from '@/components/ds';
import { Icxn } from '@/components/icons/icxn';

import { DottedLine } from '../ds/dotted-line';
import { PassLink } from '../primitives/pass-link';
import { NameAndTitle } from './name-and-title';

const LogoBox = () => {
  return (
    <Flex direction="row" align="stretch" justify="start" wrap="wrap" gap="1" css={{}}>
      <Box>
        <Icxn variant={'chvndler'} />
      </Box>
      <Box css={{ color: '$sage8' }}>
        <Icxn variant={'blob'} />
      </Box>
      <Box>
        <Icxn variant={'tree'} />
      </Box>
    </Flex>
  );
};

const IntroFooter = () => {
  return (
    <Container size={'0'} css={{ paddingLeft: 28, paddingRight: 28 }}>
      <Text
        css={{
          color: '$sage8',
          fontFamily: '$inter',
          fontSize: 11,
          fontWeight: 'normal',
          lineHeight: '30px'
        }}
      >
        © 2022 CDC. All rights reserved.
      </Text>
      <DottedLine />
      <Space size={'0'} />
      <Flex css={{ height: 16, alignItems: 'center' }}>
        <PassLink href="https://twitter.com/chvndlerch">
          <Text
            css={{
              color: '$sage9',
              fontFamily: '$inter',
              fontSize: 10,
              fontWeight: 500,
              lineHeight: '15px',
              '&:hover': { color: '$twitter' }
            }}
          >
            Twitter
          </Text>
        </PassLink>
        <Separator color={'sage'} decorative orientation={'vertical'} css={{ margin: '0 15px' }} />
        <PassLink href="https://github.com/chvndler">
          <Text
            css={{
              color: '$sage9',
              fontFamily: '$inter',
              fontSize: 10,
              fontWeight: 500,
              lineHeight: '15px',
              '&:hover': { color: '$github' }
            }}
          >
            GitHub
          </Text>
        </PassLink>
        <Separator color={'sage'} decorative orientation={'vertical'} css={{ margin: '0 15px' }} />
        <PassLink href="https://github.com/chvndler/chvndler.ch">
          <Text
            css={{
              color: '$sage9',
              fontFamily: '$inter',
              fontSize: 10,
              fontWeight: 500,
              lineHeight: '15px',
              '&:hover': { color: '$mauve12' }
            }}
          >
            View Source
          </Text>
        </PassLink>
      </Flex>
    </Container>
  );
};
export const Intro = () => {
  return (
    <>
      <Section size="1" css={{}}>
        <Container size={'0'} css={{ paddingLeft: 28, paddingRight: 28 }}>
          <LogoBox />
          <NameAndTitle />
        </Container>

        <Space size={'1'} />

        <Container size={'0'} css={{ paddingLeft: 28, paddingRight: 28 }}>
          <Paragraph
            css={{
              color: '$sage10',
              fontFamily: '$rightGroteskText',
              fontWeight: 'normal',
              fontSize: 14,
              lineHeight: 1.4,
              textAlign: 'left',
              letterSpacing: '-0.02em'
            }}
          >
            The focus in the moment is building <InlineLink href="https://ady.world/">Atelier® Design</InlineLink>, to
            silence the noise within the design culture.
          </Paragraph>

          <Space size={'1'} />
          <Paragraph
            css={{
              color: '$sage10',
              fontFamily: '$rightGroteskText',
              fontWeight: 'normal',
              fontSize: 14,
              lineHeight: 1.4,
              textAlign: 'left',
              letterSpacing: '-0.02em'
            }}
          >
            I enjoy building simple, beautiful and performant web interfaces and experiences. Improving consistently
            through learning.
          </Paragraph>

          <Space size={'1'} />
          <Paragraph
            css={{
              color: '$sage10',
              fontFamily: '$rightGroteskText',
              fontWeight: 'normal',
              fontSize: 14,
              lineHeight: 1.4,
              textAlign: 'left',
              letterSpacing: '-0.02em'
            }}
          >
            Focused on <MonoLink href="https://typescript.com">Typescript</MonoLink>,{' '}
            <MonoLink href="https://reactjs.com">React</MonoLink>, and{' '}
            <MonoLink href="https://threejs.org">three.js</MonoLink>.
            <br />
            Curious about Swift.
          </Paragraph>
        </Container>
        <Space size={'2'} />
        {/* <!-- FOOTER --> */}
        <IntroFooter />
      </Section>
    </>
  );
};
