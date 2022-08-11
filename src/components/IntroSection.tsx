import { Paragraph, Space, Text } from '@/ui';
import React from 'react';


export const IntroSection = () => {
  return (
    <>
      <Text css={{ fontFamily: '$pragmatica', fontSize: '13px', fontWeight: 'bold', color: '$opal' }}>
        chvndler.ch/about
      </Text>
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
      <Space size={2} />
    </>
  );
};
