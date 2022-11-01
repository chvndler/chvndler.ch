import { useGLTF } from '@react-three/drei';
import React from 'react';
import type * as THREE from 'three';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export const AltSceneModel = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/models/CDC_Iridescent.gltf') as unknown as GLTFResult;
  return (
    <>
      <group {...props} dispose={null}>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve.geometry}
            material={materials.Material}
            position={[0, 1.62767, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={52.59808}
            userData={{ name: 'Curve' }}
          />
        </group>
      </group>
    </>
  );
};

useGLTF.preload('/CDC_Iridescent.gltf');
