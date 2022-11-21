import { extend, Object3DNode, useThree } from '@react-three/fiber';
import React from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

// Add types to ThreeElements elements so primitives pick up on it
declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
  }
}

export const Controls = () => {
  const { camera, gl } = useThree();

  return (
    <orbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 4}
      minPolarAngle={Math.PI / 2}
      args={[camera, gl.domElement]}
    />
  );
};
