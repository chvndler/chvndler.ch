import Link from 'next/link';
import React from 'react';

import { Box } from '@/components/ds';

type GitshaProps = {
  color?: string;
};

const GitSha = () => {
  const color = '#94e522';
  const sha = '3106180';
  const shortSha = '3106180';
  const href = 'https://github.com/chvndler/chvndler.ch/commit/' + sha;

  return (
    <Box>
      <Separator color={color} />
      <Link href={href}>{shortSha}</Link>
    </Box>
  );
};

const Separator = ({ color }: GitshaProps) => {
  return (
    <svg fill={color} opacity="0.8" viewBox="0 0 24 24" width="24" height="24">
      <circle r={5} cx={19} cy={19} />
    </svg>
  );
};

export default GitSha;
