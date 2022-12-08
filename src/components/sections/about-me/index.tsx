import {Container, InlineLink, Paragraph, Section} from '@/components/ds'

export const AboutMe = () => {
  return (
    <>
      <Section size="1" css={{}}>
        <Container size="1" css={{paddingLeft: 28, paddingRight: 28}}>
          <Paragraph
            css={{
              color: '$sage10',
              fontFamily: '$rightGroteskText',
              fontWeight: '500',
              fontSize: 21,
              lineHeight: 1.4,
              textAlign: 'center',
              letterSpacing: '-0.02em',

              '@sm': {
                fontSize: 19,
                textAlign: 'left',
                letterSpacing: '-0.02em',
              },
            }}>
            The focus in the moment is building{' '}
            <InlineLink href="https://ady.world/">Atelier® Design</InlineLink>, to silence the noise
            within the design culture. I enjoy building simple, beautiful and performant web
            interfaces and experiences.
          </Paragraph>
        </Container>
      </Section>
    </>
  )
}
