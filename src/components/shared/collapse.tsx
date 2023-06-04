'use cli';

import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';

const Collapse = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root className='w-[300px]' open={open} onOpenChange={setOpen}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Collapsible.Trigger asChild>
          <button className='text-violet11 data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3 focus:shadow-black inline-flex h-[25px] w-[25px] items-center justify-center rounded-full shadow-[0_2px_10px] shadow-blackA7 outline-none focus:shadow-[0_0_0_2px]'>
            {open ? <CloseExpand /> : <OpenExpand />}
          </button>
        </Collapsible.Trigger>
      </div>

      <div className='bg-white my-[10px] rounded p-[10px] shadow-[0_2px_10px] shadow-blackA7'>
        <span className='text-violet11 text-[15px] leading-[25px]'>last link to show</span>
      </div>

      <Collapsible.Content>
        <div className='bg-white my-[10px] rounded p-[10px] shadow-[0_2px_10px] shadow-blackA7'>
          <span className='text-violet11 text-[15px] leading-[25px]'>@radix-ui/colors</span>
        </div>
        <div className='bg-white my-[10px] rounded p-[10px] shadow-[0_2px_10px] shadow-blackA7'>
          <span className='text-violet11 text-[15px] leading-[25px]'>@stitches/react</span>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default Collapse;

/**
 *
 *
 * icons or text.
 */
function CloseExpand() {
  return (
    <>
      <span className='font-mono text-xs text-carbon-400'>hide.</span>
    </>
  );
}

function OpenExpand() {
  return (
    <>
      <span className='font-mono text-xs text-carbon-400'>see more.</span>
    </>
  );
}
