import React from 'react';
import { Canvas, Text, Paragraph, Space, Flex, Container, InlineLink } from '@/ui';

const Developing = () => {
  return (
    <>
      <Canvas>
        <Container size="1" css={{ padding: 30 }}>
          <Text
            size="2"
            css={{
              fontSize: 32,
              fontFamily: '$pragmaticaExtended',
              letterSpacing: '-0.09rem',
              lineHeight: '62px',
              color: '$mauve12',
              fontWeight: '400',
            }}
          >
            hi, i'm <strong>chandler</strong>.
          </Text>
          <Paragraph css={{ fontSize: 15.5, fontFamily: '$inter', lineHeight: '22px', color: '$mauve12' }}>
            i am a front-end developer, designer, and director currently living in Charlotte, NC, USA.
          </Paragraph>
          <Space size="1" />
          <Paragraph css={{ fontSize: 15.5, fontFamily: '$inter', lineHeight: '22px', color: '$mauve12' }}>
            i'm currently building <InlineLink href="https://atlrdsgn.com/">Atelier® Design Yield</InlineLink> to calm the noise within the
            design culture. I enjoy finding, learning, and testing new tech evolvements, creating beautiful UI, and building cool brands.
          </Paragraph>
          <Space size="1" />
          <Paragraph css={{ fontSize: 15.5, fontFamily: '$inter', lineHeight: '22px', color: '$mauve12' }}>
            feel free to say <InlineLink href="/">hello</InlineLink>, I am currently looking for my next role.
          </Paragraph>
          <Space size="2" />
          <Flex css={{ flexDirection: 'row', gap: 18, display: 'inline-flex' }}>
            <InlineLink
              href="https://twitter.com/chvndlerch/"
              css={{
                fontFamily: '$pragmaticaExtended',
                fontWeight: 'bold',
                fontSize: 14,
                textDecoration: 'none',
                color: '$twitter',
              }}
            >
              twitter
            </InlineLink>

            <InlineLink
              href="https://github.com/chvndler/"
              css={{
                fontFamily: '$pragmaticaExtended',
                fontWeight: 'bold',
                fontSize: 14,
                textDecoration: 'none',
                color: '$mauve10',
              }}
            >
              github
            </InlineLink>
          </Flex>

          <br></br>
          <Flex css={{ flexDirection: 'row', gap: 18, display: 'inline-flex' }}>
            <InlineLink
              href="https://instagram.com/chv.ndler/"
              css={{
                fontFamily: '$pragmaticaExtended',
                fontWeight: 'normal',
                fontSize: 14,
                textDecoration: 'none',
                color: '$chvn2',
              }}
            >
              chvndler.ch@gmail
            </InlineLink>
          </Flex>
        </Container>
      </Canvas>
    </>
  );
};

export default Developing;
