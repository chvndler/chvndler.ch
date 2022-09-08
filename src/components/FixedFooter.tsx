import React from 'react';
import { Box, Text } from '@/ui';

export function FixedFooter() {
  return (
    <>
      <Box
        css={{
          backgroundColor: '$mauve6',
          height: '64px',
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
        <Text
          css={{
            fontFamily: '$miu',
            fontSize: '10px',
            color: '$mauve9',
            letterSpacing: '0.05rem',
            lineHeight: '22px',
          }}>CHVNDLER.CH</Text>
      </Box>
    </>
  );
}
