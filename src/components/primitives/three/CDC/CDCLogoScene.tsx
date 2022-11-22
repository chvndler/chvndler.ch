import { Environment, OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import React, { Suspense, useRef } from 'react';
import { styled } from 'stitches.config';

import { LogoModel } from './logo-model';

const AppBox = styled('div', {
  zIndex: 3,
  position: 'fixed',
  top: 0,
  bottom: 0,
  backgroundColor: 'transparent',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  margin: 0
});

export const CDCLogoScene = () => {
  const ref = useRef();
  return (
    <>
      {/* <!-- Begin three.js module --> */}
      <AppBox>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 70 }}>
          <Suspense fallback={null}>
            <Stage controls={ref} preset={'portrait'} intensity={1.8} contactShadow={false} environment={'sunset'}>
              <directionalLight intensity={0.5} />
              <Environment preset="sunset" />
              <gridHelper scale={0} />
              <axesHelper scale={0} />
              <LogoModel />
              <OrbitControls
                ref={ref}
                enablePan={false}
                enableZoom={true}
                position={[0, 0, 0]}
                autoRotate
                autoRotateSpeed={0.4}
              />
              {/* <!-- <Environment background={true} files={'/textures/kloppenheim_01_4k.hdr'} /> --> */}
            </Stage>
            <EffectComposer>
              <Noise premultiply blendFunction={BlendFunction.ADD} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </AppBox>
    </>
  );
};
