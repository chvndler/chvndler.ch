import { Stats } from '@react-three/drei';
import { Canvas, extend } from '@react-three/fiber';
import React, { FC, ReactNode } from 'react';
import { styled } from 'stitches.config';
import { OrbitControls, TransformControls } from 'three-stdlib';

import { Box } from '@/components/ds';
extend({ OrbitControls, TransformControls });

type R3FCanvasLayoutProps = {
  children?: ReactNode;
  htmlChildren?: ReactNode;
};

const R3FCanvas = styled(Box, {
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  padding: 0,
  margin: 0
});

const StyledStats = styled('div', {
  top: 'auto',
  bottom: 'auto',
  left: 0,
  right: 0
});

export const R3FCanvasLayout: FC<R3FCanvasLayoutProps> = ({ children, htmlChildren, ...rest }) => {
  return (
    <>
      {htmlChildren}
      <R3FCanvas>
        <Canvas {...rest}>
          <StyledStats>
            <Stats />
          </StyledStats>
          {children}
        </Canvas>
      </R3FCanvas>
    </>
  );
};
