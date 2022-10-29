import { useGLTF } from '@react-three/drei';
import React from 'react';
import type * as THREE from 'three';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshPhysicalMaterial;
  };
};

export const LogoModel = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/models/CDC_Purple.glb') as unknown as GLTFResult;

  return (
    <>
      <group {...props} dispose={null}>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve.geometry}
            material={materials.Material}
            position={[0, 1.4, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1, 1, 1]}
          />
        </group>
      </group>
    </>
  );
};
