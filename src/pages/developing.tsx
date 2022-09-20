import React from 'react';
import { Canvas, Text, Paragraph, Space, Flex, Container, InlineLink } from '@/ui';
import { css } from '@/lib/stitches.config';

const backdrop = css({
  zIndex: 0,
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: '$chvn000',
  minWidth: '100vw',
  minHeight: '100vh',
  padding: '0',
  margin: '0',
});

const Developing = () => {
  return (
    <>
      <div className={backdrop()}>
        <Canvas>
    <Container size="1" css = {{ padding: 20 }}>
            
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
                
            <Paragraph css={{ fontSize: 16, fontFamily: '$chGrotesk', lineHeight: '22px', color: '$chvn400' }}>
              i am a front-end developer, designer, and director currently living in Charlotte, NC, USA.
            </Paragraph>
            <Space size = "1" />
            <Paragraph css={{ fontSize: 16, fontFamily: '$chGrotesk', lineHeight: '22px', color: '$chvn400' }}>
              i'm currently building <InlineLink href="https://atlrdsgn.com/">Atelier® Design Yield</InlineLink> to calm the noise within
              the design culture. I enjoy finding, learning, and testing new tech evolvements, creating beautiful UI, and building cool
              brands.
            </Paragraph>
            <Space size = "1" />
            <Paragraph css={{ fontSize: 16, fontFamily: '$chGrotesk', lineHeight: '22px', color: '$chvn400' }}>
              say <InlineLink href="/">hello</InlineLink>, I am currently looking for my next role.
            </Paragraph>
            <Space size = "2" />
            <Flex css={{ flexDirection: 'row', gap: 18, display: 'inline-flex' }}>
              <InlineLink
                href="https://twitter.com/chvndlerch/"
                css={{
                  fontFamily: '$pragmaticaExtended',
                  fontWeight: 'bold',
                  fontSize: 14,
                  textDecoration: 'none',
                  color: '$chvn500',
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
                  color: '$chvn300',
                }}
              >
                github
              </InlineLink>
                

              <InlineLink
                href="https://github.com/chvndler/"
                css={{
                  fontFamily: '$pragmaticaExtended',
                  fontWeight: 'bold',
                  fontSize: 14,
                  textDecoration: 'none',
                  color: '$chvn700',
                }}
              >
                gram
              </InlineLink>
                
              <InlineLink
                href="https://github.com/chvndler/"
                css={{
                  fontFamily: '$pragmaticaExtended',
                  fontWeight: 'bold',
                  fontSize: 14,
                  textDecoration: 'none',
                  color: '$chvn600',
                }}
              >
                linkedin
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
                  color: '$chvn400',
                }}
              >
                chvndler.ch@gmail
              </InlineLink>
            </Flex>
          </Container>
        </Canvas>
      </div>
    </>
  );
};

export default Developing;
