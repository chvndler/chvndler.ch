import React from 'react';
import Link from 'next/link';
import { Box } from '@/ui';

export function FixedFooter() {
  return (
    <>
      <Box
        css={{
          position: 'fixed',
          bottom: '0',
          right: '0',
          left: '0',
          padding: '20px',
          margin: 'auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Box css={{ marginRight: '5px', marginLeft: '5px', color: '$mauve12', fontSize: '13px' }}>
          <Link href="/">Terms</Link>
        </Box>
        <Box css={{ marginRight: '5px', marginLeft: '5px', color: '$mauve12', fontSize: '13px' }}>
          <Link href="/">Blog</Link>
        </Box>
        <Box css={{ marginRight: '5px', marginLeft: '5px', color: '$mauve12', fontSize: '13px' }}>
          <Link href="/">Twitter</Link>
        </Box>
      </Box>
    </>
  );
}
