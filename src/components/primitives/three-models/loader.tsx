import { Html, useProgress } from '@react-three/drei';

import { Box } from '@/components/ds';

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <>
      <Html center>
        <Box css={{ zIndex: 999, display: 'flex', flexDirection: 'row' }}>{progress}%</Box>
      </Html>
    </>
  );
};
