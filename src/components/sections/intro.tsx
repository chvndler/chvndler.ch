import { Box, Container, Flex, InlineLink, MonoLink, Paragraph, Section, Space } from '@/components/ds';
import { Icxn } from '@/components/icons/icxn';

import { NameAndTitle } from './name-and-title';

const LogoBox = () => {
  return (
    <Flex direction="row" align="stretch" justify="start" wrap="wrap" gap="1" css={{}}>
      <Box>
        <Icxn variant={'cdc'} />
      </Box>
      <Box>
        <Icxn variant={'blob'} />
      </Box>
      <Box>
        <Icxn variant={'arena'} />
      </Box>
    </Flex>
  );
};

// BEGIN APP®...
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
              fontFamily: '',
              fontWeight: 500,
              fontSize: 15,
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
              fontFamily: '',
              fontWeight: 500,
              fontSize: 15,
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
              fontFamily: '',
              fontWeight: 500,
              fontSize: 15,
              lineHeight: 1.4,
              textAlign: 'left',
              letterSpacing: '-0.02em'
            }}
          >
            Focused on <MonoLink href="https://typescript.com">Typescript</MonoLink>,{' '}
            <MonoLink href="https://reactjs.com">React</MonoLink>, and{' '}
            <MonoLink href="https://threejs.org">three.js</MonoLink>.
            <br />
            Curious about <MonoLink href="https://developer.apple.com/swift/">Swift</MonoLink>.
          </Paragraph>
        </Container>
        <Space size={'2'} />
        {/* <!-- FOOTER --> */}
      </Section>
    </>
  );
};
