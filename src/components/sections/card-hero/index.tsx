import { Section } from '@/components/ds';

type CardHeroProps = {
  children?: React.ReactNode;
};

import { styled } from 'stitches.config';

const CardCanvas = styled('div', {
  zIndex: '20',
  boxSizing: 'border-box',
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: 'auto',
  margin: 'auto',
  padding: '0'
});

export const CardHero = ({ children }: CardHeroProps) => {
  return (
    <Section size="4" css={{ zIndex: 10, height: '50vh', backgroundColor: '$chxn3' }}>
      <CardCanvas>{children}</CardCanvas>
    </Section>
  );
};
