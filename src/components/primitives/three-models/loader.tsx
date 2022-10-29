import { Html, useProgress } from '@react-three/drei';

import { Box, Text } from '@/components/ds';

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <>
      <Html center>
        <Box css={{ zIndex: 999 }}>
          <Text css={{ color: '$slate12', fontFamily: '$subtle', fontSize: 18, textAlign: 'center' }}>
            {progress} % loaded
          </Text>
        </Box>
      </Html>
    </>
  );
};
