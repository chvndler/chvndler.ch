import Head from 'next/head';

import { styled } from '@/lib/stitches.config';
import { Section } from '@/ui';

// Container..
const BlogWidthContainer = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  maxWidth: '700px',
  padding: '8px',
  margin: 'auto',

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$1',
  mt: '0',
});

export default function BlogContainer(props) {
  const { children } = props;
  const meta = {
    title: 'Chandler Chappell – Developer, writer, creator.',
    description: `Front-end developer, designer, and director.`,
    image: 'https://chvndler.ch/img/cover.jpg',
    type: 'website',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:image' content={meta.image} />
        <meta property='og:type' content={meta.type} />
      </Head>
      <main>
        <Section size='1' css={{ padding: 0 }}>
          <BlogWidthContainer>{children}</BlogWidthContainer>
        </Section>
      </main>
    </>
  );
}
