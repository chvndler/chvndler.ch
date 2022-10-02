import Image from 'next/image';

import { BlurCanvas, Box } from '@/components/ds';

type BlurProps = {
  image: string;
};

export const CoverImageBlur = ({ image }: BlurProps) => {
  return (
    <>
      <BlurCanvas position="relative" blur="sm" color="light" />
      <Box css={{ zIndex: '0' }}>
        <Image className="web_video" src={image} objectFit="cover" layout="fill" alt="backgroundImage" />
      </Box>
    </>
  );
};
