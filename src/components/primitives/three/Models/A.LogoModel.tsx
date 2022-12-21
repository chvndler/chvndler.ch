/** @format */

import {useGLTF} from '@react-three/drei'
import React from 'react'
import type * as THREE from 'three'
import type {GLTF} from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Curve002: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export const ALogoModel = (props: JSX.IntrinsicElements['group']) => {
  const {nodes, materials} = useGLTF('/models/A_Logo.gltf') as unknown as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group name={'scene'}>
        <mesh
          name='Curve002'
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          material={materials.Material}
          rotation={[Math.PI / 2, 0, 0]}
          scale={97.414169}
          userData={{name: 'Curve.002'}}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/A_Logo.gltf')
