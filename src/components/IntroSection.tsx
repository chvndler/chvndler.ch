import { Badge, Container, Paragraph, Space, Text } from '@/ui';
import React from 'react';


export const IntroSection = () => {
  return (
    <>
      <Container size={3}>
        <Text css={{
          fontFamily: '$pragmaticaExtended',
          fontSize: '15px',
          fontWeight: '400px',
          color: '$opal',
          marginBottom: '10px',
          marginTop: '0px',
        }}>
          chvndler.ch/about
        </Text>
        <Space size={1} />
        <Badge size={1} variant='tartOrange'>about</Badge>
        <Space size={1} />
        <Paragraph
          css={{
            fontFamily: '$chGrotesk',
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '0.01rem',
            color: '$mauve12',
            lineHeight: 'normal',
          }}>
          I&apos;m Chandler, most call me Chan.<br />
          Front-end developer & designer based in Charlotte, NC– I am currently
          building AtelierDesign®
          to calm the noise within design culture. I enjoy exploring– finding, and learning new tech advancements,
          developing beautiful user interfaces, and have a passion for building brands.
        </Paragraph>
      </Container>
      <Space size={2} />
    </>
  );
};
