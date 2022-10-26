import { Container, InlineLink, Paragraph, Section } from '@/components/ds';

export const AboutMe = () => {
  return (
    <>
      <Section size="2" css={{ paddingTop: 40 }}>
        <Container size="1" css={{}}>
          <Paragraph
            css={{
              color: '$sage10',
              fontFamily: '$rightGroteskText',
              fontSize: 20,
              fontWeight: '600',
              lineHeight: 1.4,
              textAlign: 'center'
            }}
          >
            The focus in the moment is building <InlineLink href="/">Atelier® Design</InlineLink>, to silence the noise
            within the design culture. I enjoy building simple, beautiful and performant web interfaces and experiences.
          </Paragraph>
        </Container>
      </Section>
    </>
  );
};
