import * as HoverCard from '@radix-ui/react-hover-card';
import React from 'react';

import { Text } from '@/components/ds';
import { Avatar } from '@/components/primitives/avatar';

import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot } from './hover.styles';

export const HoverCardComponent = () => {
  return (
    <>
      <HoverCardRoot openDelay={300} closeDelay={800}>
        <HoverCard.Trigger>
          <AviNFT />
        </HoverCard.Trigger>

        <HoverCardPortal>
          <HoverCardContent>
            <Text>
              Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source.
            </Text>
            <HoverCardArrow />
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCardRoot>
    </>
  );
};

const AviNFT = () => {
  return (
    <Avatar
      interactive
      size={'4'}
      shape={'circle'}
      alt={'Chandler®'}
      fallback={'C'}
      src={'https://avatars.githubusercontent.com/u/70621588?s=96&v=4'}
    />
  );
};
