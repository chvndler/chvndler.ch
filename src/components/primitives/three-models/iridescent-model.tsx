import { useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Loader } from './loader';

export const IridescentLogo = () => {
  const gltf = useLoader(GLTFLoader, '/models/CDC_Iridescent.gltf');
  return (
    <React.Suspense fallback={<Loader />}>
      <primitive object={gltf.scene} />
    </React.Suspense>
  );
};
