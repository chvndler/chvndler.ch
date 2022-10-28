import { Container, InlineLink, Paragraph, Section } from '@/components/ds';

export const AboutMe = () => {
  return (
    <>
      <Section size="2" css={{ paddingTop: 40 }}>
        <Container size="1" css={{}}>
          <Paragraph
            css={{
              color: '$sage10',
              // fontFamily: '$subtle',
              fontFamily: '$rightGroteskText',
              fontWeight: '600',
              fontSize: 21,
              lineHeight: 1.4,
              // textTransform: 'uppercase',
              textAlign: 'center',
              letterSpacing: '-0.03em'
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
