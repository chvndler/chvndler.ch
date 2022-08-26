import { IconButton } from '@/ui';
import CommandIcon from '@/components/icons/CommandIcon';
import React from 'react';


export const MobileCmd = () => {
  return (
    <>
      <IconButton aria-label='Invoke Cmd+k Menu'>
        <CommandIcon />
      </IconButton>
    </>
  );
};
