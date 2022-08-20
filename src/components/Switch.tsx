import React from 'react';
import { styled } from '@/lib/stitches.config';
import { Flex } from '@/ui';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 34,
  height: 19,
  backgroundColor: '$mauve3',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 4px $colors$mauveA2`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px $colors$mauve12` },
  '&[data-state="checked"]': {
    backgroundColor: '$mauve7',
  },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 16,
  height: 16,
  backgroundColor: '$mauve1',
  borderRadius: '9999px',
  boxShadow: `0 0 2px 0px $colors$voltYellow`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(17px)',
    backgroundColor: '$chvn3',
    boxShadow: `0px 0px 4px 1px $colors$voltYellow`,
  },
});

// exports..
export const Switch = StyledSwitch;
export const SwitchThumb = StyledThumb;
export const AtelierSwitch = ({ ...props }) => (
  <form>
    <Flex css={{ alignItems: 'center' }}>
      {/* <!-- <Switch id="s1" defaultChecked /> --> */}
      <Switch id='s1' {...props}>
        <SwitchThumb />
      </Switch>
    </Flex>
  </form>
);
