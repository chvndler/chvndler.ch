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

export const CDCDevModel = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/models/CDC.gltf') as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Curve"
          geometry={nodes.Curve.geometry}
          material={materials.Material}
          rotation={[Math.PI / 2, 0, 0]}
          scale={3}
          userData={{ name: 'Curve' }}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/CDC.gltf');
