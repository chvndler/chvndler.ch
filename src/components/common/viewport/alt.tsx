import { useRealViewport } from 'next-real-viewport';

import { Box } from '@/components/ds';

type FVPProps = {
  children: React.ReactNode;
};

export const UseFullViewport = ({ children }: FVPProps) => {
  const { vw, vh } = useRealViewport();

  return (
    <Box
      css={{
        width: `${vw} * 100`,
        height: `${vh} * 100`
      }}
    >
      {children}
    </Box>
  );
};
