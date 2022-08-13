import React from 'react';
import { styled } from '@/lib/stitches.config';
import { Flex } from '@/ui';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 34,
  height: 19,
  backgroundColor: '$mauve6',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 4px $colors$mauveA2`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px $colors$mauve12` },
  '&[data-state="checked"]': {
    backgroundColor: '$mauve5',
  },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 16,
  height: 16,
  backgroundColor: '$mauve2',
  borderRadius: '9999px',
  // border: '1px solid $mauve8',
  // boxShadow: `0 3px 2px $colors$mauveA7`,
  boxShadow: `0 1px 2px $colors$pinkyA`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(18px)',
    backgroundColor: '$volt',
    boxShadow: `0px 0px 3px 0px $colors$voltYellow`,
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
