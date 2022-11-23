import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';

import { DevModel } from './DevModel';

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

export const DevScene = () => {
  const ref = useRef();

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 90, near: 0.3, far: 100, position: [0, 0, 9] }}
      linear={false}
      flat={true}
      orthographic={false}
    >
      <pointLight position={[120, 50, 10]} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={1} contactShadow={false} shadows={false} environment="dawn">
          <DevModel />
        </Stage>
        <gridHelper args={[10, 40, '#F05724', '#C7BBB0']} position={[0, 0.1, 0]} rotation={[0, 0, Math.PI / 2]} />
        <OrbitControls ref={ref} autoRotate autoRotateSpeed={0.2} />
        {/* <!-- <axesHelper /> --> */}
        {/* <!-- <EffectComposer></EffectComposer> --> */}
      </Suspense>
    </Canvas>
  );
};