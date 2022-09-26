import Image from 'next/image';

// Layout
import { Section, Canvas, Container } from '@/components/ds';

// Primitives
import Button from '@/components/primitives/button';

// Styles
import { styled } from 'stitches.config';

// Images
import label from '../../../../public/images/labelhero.png';

import { ArrowDown } from '@/components/primitives/arrow';

const Title = styled('h1', {
  color: '$chxn4',
  fontFamily: '$telegraf',
  fontWeight: 'bold',
  fontKerning: 'none',
  lineHeight: '1',
  letterSpacing: '-9px',
  marginLeft: '-0.347vw',
  overflow: 'hidden',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: 'max($9, 11.750vw)',

  '@bp1': {
    fontSize: 'max($9, 13.750vw)'
  },

  em: {
    display: 'inline-block',
    fontKerning: 'none',
    fontStyle: 'normal',
    transform: 'translateY(-38%)'
  }
});

const Outlined = styled('span', {
  // backgroundPosition: '48% 34%',
  color: '$chxn1',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '110%',
  fontKerning: 'none',
  display: 'inline-block',
  letterSpacing: '-9px',
  // marginTop: '5.736vw',
  // paddingRight: '0.7vw',
  WebkitTextFillColor: 'transparent',
  WebkitTextStroke: '0.115vw white',
  '@bp1': {
    letterSpacing: '-0.694vw'
  }
});

const Subtitle = styled(Button, {
  alignItems: 'center',
  color: '$chxn4',
  display: 'flex',
  fontFamily: '$neueMontreal',
  fontWeight: '700',
  marginTop: 'max(16px, 1.667vw)',
  fontSize: '3.75vw',
  lineHeight: 'normal',

  '@bp1': {
    fontSize: 'max($4, 1.667vw)'
  },

  svg: {
    marginLeft: '$2'
  }
});

const Wrapper = styled('div', {
  alignItems: 'center',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  paddingTop: 0
});

const ImageContainer = styled('div', {
  bottom: 100,
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%, 50%)'
});

const AlternateHero = () => {
  return (
    <Section size="4" css={{ zIndex: 10 }}>
      <Canvas>
        <Wrapper>
          <Container
            css={{
              width: '100%',
              padding: 0,
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Title data-cursor="undefined">
              <Outlined data-scroll data-scroll-speed={-0.6} className="hero__title">
                CHXNDLER
              </Outlined>
              <br style={{ userSelect: 'none' }} />
              <div data-scroll data-scroll-speed={0.4} data-cursor="undefined">
                <em className="hero__subtitle">CHXNDLER</em>
              </div>
            </Title>
            <Subtitle
              className="hero__link"
              data-scroll
              data-scroll-speed={-0.3}
              icon={<ArrowDown />}
              variant="underlined"
            >
              SOMETHING LIKE THIS BUT NOT THIS
            </Subtitle>
          </Container>
        </Wrapper>
      </Canvas>
      <ImageContainer>
        <Image
          alt="Stitch"
          className="hero__image"
          height={100}
          objectFit="cover"
          priority
          quality={100}
          src={label}
          width={266}
        />
      </ImageContainer>
    </Section>
  );
};

export default AlternateHero;
