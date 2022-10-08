import { InlineLink, Paragraph } from '~/components/ds';

export const AboutMe = () => {
  return (
    <>
      <Paragraph
        css={{
          fontFamily: '$neueMontreal',
          fontSize: 16,
          fontWeight: 'normal',
          lineHeight: '22px',
          color: '$chxn4',
          // textTransform: 'uppercase',
          letterSpacing: '0.04rem',
          '@md': {
            fontSize: 16,
            lineHeight: '20px'
          }
        }}
      >
        The focus in the moment is building <InlineLink href="/">Atelier® Design</InlineLink>, to silence the noise in
        design culture. My passion is to make simple, beautiful and performant web experiences. <br />
        <br />
        Currently searching for my next role. <InlineLink href="/">Let's build</InlineLink>.
      </Paragraph>
    </>
  );
};
