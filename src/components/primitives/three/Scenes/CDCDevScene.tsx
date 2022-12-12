import {OrbitControls, Stage} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import React, {Suspense, useRef} from 'react'

import {Loader} from '../loader'
import {CDCDevModel} from '../Models/CDCDevModel'

/**
 *
 * @EffectComposers
 * import { EffectComposer } from '@react-three/postprocessing';
 *
 * <EffectComposer />
 *
 * @Grid
 * <DepthOfField focusDistance={focusDistance} focalLength={focalLength} bokehScale={bokehScale} />
 *
 * @DepthOfField
 * <DepthOfField focusDistance={1} focalLength={1} bokehScale={8} />
 *
 * @Noise
 * <Noise premultiply blendFunction={BlendFunction.ADD} />
 *
 * @Bloom
 * <Bloom kernelSize={KernelSize.LARGE} // blur kernel size luminanceThreshold={0.3} // luminance threshold. Raise this value to mask out darker elements in the scene. luminanceSmoothing={0.4} // smoothness of the luminance threshold. Range is [0, 1] />
 *
 */

export const CDCDevScene = () => {
 const ref = useRef()
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
   <Suspense fallback={<Loader />}>
    <Stage
     adjustCamera={2}
     preset={'rembrandt'}
     intensity={1}
     shadows={false}
     environment={'sunset'}>
     <CDCDevModel />
    </Stage>
    <OrbitControls ref={ref} autoRotate autoRotateSpeed={0.1} />
    <gridHelper
     scale={1}
     args={[4, 30, '#EAFF97', '#313341']}
     position={[0, 0, 0]}
     rotation={[0, 0, Math.PI / 2]}
    />
   </Suspense>
  </Canvas>
 )
}
