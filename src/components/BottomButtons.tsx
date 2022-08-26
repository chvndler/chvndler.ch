import { Box, Flex } from '@/ui';
import React from 'react';


export const BottomButtons = ({ children }) => {
  return (
    <>


      <Box css={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: '20px',
        margin: 'auto',
        textAlign: 'center',
        alignItems: 'center',
        '@sm': {
          paddingBottom: '30px',
        },
      }}>
        <Flex direction='row' css={{ gap: '4px', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>

          {children}
        </Flex>
      </Box>
    </>
  );
};
