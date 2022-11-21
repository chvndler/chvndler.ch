import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useRef } from 'react';
import { styled } from 'stitches.config';

import { AltSceneModel } from './alt-iridescent-model';

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

export const AlternateScene = () => {
  const ref = useRef();

  return (
    <>
      {/* <!-- Begin three.js module --> */}
      <AppBox>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 90 }}>
          <Stage
            controls={ref}
            preset="rembrandt"
            intensity={0.3999999999999999}
            contactShadow={false}
            environment="dawn"
          >
            <OrbitControls enableZoom={false} position={[0, 20, 100]} autoRotate autoRotateSpeed={0.4} />
            <AltSceneModel />
            {/* <!-- <IridescentLogo /> --> */}
            {/* <!-- <AltSceneModel /> --> */}
            {/* <!-- <axesHelper /> --> */}
            {/* <!-- <Controls /> 
            <Environment background={true} files={'/textures/kloppenheim_01_4k.hdr'} />
            --> */}
          </Stage>
        </Canvas>
      </AppBox>
    </>
  );
};
