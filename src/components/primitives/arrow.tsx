import { styled } from 'stitches.config';

import IconArrowDown from '@/components/icons/arrow-hero.svg';
import IconArrowUp from '@/components/icons/arrow-up.svg';

const ArrowDown = styled(IconArrowDown, {
  $$size: 'max(20px, 1.389vw)',
  width: '$$size',
  height: '$$size'
});

const ArrowUp = styled(IconArrowUp, {
  zIndex: '90',
  $$size: 'max(20px, 1.389vw)',
  width: '20px',
  height: '20px',
  fill: '$chxn3'
});

export { ArrowDown, ArrowUp };
