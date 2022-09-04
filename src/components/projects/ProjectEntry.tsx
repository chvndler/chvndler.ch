import { styled } from '@/lib/stitches.config';
// import { useInView } from 'react-intersection-observer';
// import 'intersection-observer';
import { Box } from '@/ui';
import React from 'react';

// const imagePrefix = `https://cdn.ady.systems/ady.images`;

const Title = styled('div', {
  color: '$mauve10',
  fontFamily: '$pragmaticaExtended',
  fontSize: '14px',
  fontWeight: '700',
  marginBottom: '10px',
  lineHeight: '0.6',
  letterSpacing: '-0.02rem',
  '&:hover': {
    color: '$chvn2',
  },
});

const Description = styled('div', {
  fontFamily: '$chGrotesk',
  fontWeight: '400',
  fontSize: '13px',
  lineHeight: '16px',
  color: '$mauve9',
});

const EntryLink = styled('a', {
  width: '100%',
  display: 'block',
  textDecoration: 'none',
  outline: 'none',
  '&:hover': {
    color: '$chvn4',
  },
});

const Card = styled('div', {
  transition: 'all .6s ease-in-out',
  display: 'flex',
  backgroundColor: 'transparent',
  border: 'solid 1px $tartOrange',
  position: 'relative',
  borderRadius: 12,
  marginTop: '0',
  marginBottom: '0',
  padding: '18px',
  alignItems: 'left',
  webkitScrollbar: 'none',
  height: '120px',
  '&:hover': {
    color: '$chvn4',
  },
});

export const ProjectEntry = ({ title, description, href, key }) => {
  // const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <>
      <Box css={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <Card
          key={key}
          css={{
            // backgroundImage: image ? (!inView ? 'none' : `url('${imagePrefix}/${image}')`) : 'none',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            objectFit: 'cover',
            '&:hover': {
              backgroundColor: '$light100',
              backdropFilter: 'blur(222px)',
              WebkitBackdropFilter: 'blur(222px)',
              saturate: '200%',
            },

            '&::before': {},
            '&::after': {},
          }}>
          <EntryLink
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            // ref={ref}
            title={`${title} - ${description}`}>
            <section>
              <Box
                css={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',

                  marginLeft: '18px',
                  marginRight: '18px',
                  marginBottom: '20px',
                }}>
                <Title>{title}</Title>
                <Description>{description}</Description>
              </Box>
            </section>
          </EntryLink>
        </Card>
      </Box>
    </>
  );
};
