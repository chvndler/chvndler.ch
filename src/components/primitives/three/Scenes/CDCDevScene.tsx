/** @format */

import {OrbitControls, Stage} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import * as React from 'react'

import {Loader} from '../loader'
import {CDCDevModel} from '../Models/CDCDevModel'

export const CDCDevScene = () => {
  const ref = React.useRef()
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{fov: 18, near: 2, far: 1000, position: [0, 0, 9]}}
      linear={false}
      flat={false}
      orthographic={false}>
      <pointLight position={[120, 50, 10]} />
      <directionalLight intensity={0.8} />
      <React.Suspense fallback={<Loader />}>
        <Stage adjustCamera={2} preset={'rembrandt'} intensity={1} shadows={false} environment={'sunset'}>
          <CDCDevModel />
        </Stage>
        <OrbitControls ref={ref} autoRotate autoRotateSpeed={0.1} />
        <gridHelper
          scale={1}
          args={[4, 30, '#EAFF97', '#313341']}
          position={[0, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        />
      </React.Suspense>
    </Canvas>
  )
}
