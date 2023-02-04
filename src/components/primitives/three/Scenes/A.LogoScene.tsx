/** @format */

import {OrbitControls, Stage} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import * as React from 'react'
import {styled} from 'stitches.config'

import {ALogoModel} from '../Models/A.LogoModel'

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
})

export const ALogoScene = () => {
  const ref = React.useRef()
  return (
    <>
      {/* <!-- Begin three.js module --> */}
      <AppBox>
        <Canvas dpr={[1, 2]} camera={{fov: 50}}>
          <React.Suspense fallback={null}>
            <Stage preset={'soft'} intensity={0.6} environment={'forest'}>
              <OrbitControls ref={ref} autoRotate autoRotateSpeed={0.1} />
              <gridHelper
                scale={2}
                args={[4, 30, '#EAFF97', '#313341']}
                position={[0, 0, 0]}
                rotation={[0, 0, Math.PI / 2]}
              />
              <ALogoModel />
            </Stage>
          </React.Suspense>
        </Canvas>
      </AppBox>
    </>
  )
}
