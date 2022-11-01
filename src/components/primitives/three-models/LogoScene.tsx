import { Environment, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import { styled } from 'stitches.config';

import { Section, Text } from '@/components/ds';
import { AppBar } from '@/components/layout/app-bar';

import { Controls } from './controls';
import { Loader } from './loader';
import { LogoModel } from './logo';

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

export const LogoScene = () => {
  const ref = useRef();

  return (
    <>
      <AppBar />

      <Section size="1" css={{ paddingTop: 80, zIndex: 999 }}>
        <Text
          css={{
            color: '$blue9',
            lineHeight: '2',
            fontFamily: '$neueMontreal',
            textTransform: 'uppercase',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}
        >
          Chandler Ch®
        </Text>
        <Text
          css={{
            color: '$sage9',
            lineHeight: '1',
            fontFamily: '$subtle',
            textTransform: 'uppercase',
            fontSize: 11.5,
            fontWeight: 'normal',
            textAlign: 'center',
            letterSpacing: '0.03em'
          }}
        >
          FRONT-END DEV / DESIGNER
        </Text>
      </Section>

      {/* <!-- Begin three.js module --> */}
      <AppBox>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 90 }}>
          <Suspense fallback={<Loader />}>
            <Stage
              controls={ref}
              preset="rembrandt"
              intensity={0.3999999999999999}
              contactShadow={false}
              environment="dawn"
            >
              <Controls />
              <LogoModel />
              {/* <!-- <axesHelper /> --> */}
              {/* <!-- <OrbitControls /> --> */}
              <Environment background={false} files={'/textures/roof_2k.hdr'} />
            </Stage>
          </Suspense>
        </Canvas>
      </AppBox>
    </>
  );
};
