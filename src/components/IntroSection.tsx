import { Badge, Container, Paragraph, Section, Space } from '@/ui';
import React from 'react';


export const IntroSection = () => {
  return (
    <>


      <Section size={2} css={{ paddingTop: '50px' }}>
        <Container size={3}>
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
            I&apos;m Chandler, most call me Chan.<br /><br />
            Front-end developer & designer based in Charlotte, NC– I am currently
            building AtelierDesign®
            to calm the noise within design culture. I enjoy exploring– finding, and learning new tech advancements,
            developing beautiful user interfaces, and have a passion for building brands.
          </Paragraph>
        </Container>
      </Section>

    </>
  );
};
