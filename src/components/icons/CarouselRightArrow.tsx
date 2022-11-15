import { Box } from '@/components/ds';

import { Icxn } from './icxn';

export const RightArrow = () => {
  return (
    <>
      <Box
        css={{
          boxSizing: 'border-box',
          padding: 20,
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: 'auto',
          zIndex: 9999,
          overflow: 'hidden',
          backgroundColor: 'transparent',
          backdropFilter: 'blur(40px) saturate(100%)',
          WebkitBackdropFilter: 'blur(40px) saturate(100%)'
        }}
      >
        {/**
        <Box
          css={{
            border: '1px solid $sage8',
            padding: 4,
            borderRadius: 8,
            backgroundColor: 'transparent',
            backdropFilter: 'blur(40px) saturate(100%)',
            WebkitBackdropFilter: 'blur(40px) saturate(100%)'
          }}
        >
        */}
        <Icxn variant={'rightArrow'} />
      </Box>
    </>
  );
};
