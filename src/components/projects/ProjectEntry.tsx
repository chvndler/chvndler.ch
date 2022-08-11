import { styled } from '@/lib/stitches.config';
// import { useInView } from 'react-intersection-observer';
// import 'intersection-observer';
import { Box } from '@/ui';
import React from 'react';

// const imagePrefix = `https://cdn.ady.systems/ady.images`;

const Title = styled('div', {
  color: '$mauve10',
  fontFamily: '$chGrotesk',
  fontSize: '18px',
  fontWeight: '700',
  marginBottom: '10px',
  lineHeight: '0.6',
  letterSpacing: '-0.05rem',
});

const Description = styled('div', {
  fontFamily: '$chGrotesk',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '0.8',
  color: '$mauve9',
});

const EntryLink = styled('a', {
  width: '100%',
  display: 'block',
  textDecoration: 'none',
  outline: 'none',
});

const Card = styled('div', {
  transition: 'all .6s ease-in-out',
  display: 'flex',
  backgroundColor: 'transparent',
  border: 'solid 1px $mauve5',
  position: 'relative',
  borderRadius: '12px',
  marginTop: '0',
  marginBottom: '0',
  padding: '18px',
  alignItems: 'left',
  webkitScrollbar: 'none',
  height: '120px',
});

export const ProjectEntry = ({ title, description, href, key }) => {
  // const [ref, inView] = useInView({ triggerOnce: true });
  
  return (
    <>
      <Box css={{ paddingTop: '0px', paddingBottom: '0px' }}>
        {/* <!-- Grid Will Render this asChild.. --> */}
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
