/** @format */

import {useGLTF} from '@react-three/drei'
import React from 'react'
import type * as THREE from 'three'
import type {GLTF} from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export const CDCLogoModel = (props: JSX.IntrinsicElements['group']) => {
  const {nodes, materials} = useGLTF('/models/CDC_Iridescent.gltf') as unknown as GLTFResult

  return (
    <>
      <group {...props} dispose={null}>
        <group name={'Scene'}>
          <mesh
            name={'Curve'}
            castShadow
            receiveShadow
            geometry={nodes.Curve.geometry}
            material={materials.Material}
            position={[1, 1.6, -0.3]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={52.6}
            userData={{name: 'Curve'}}></mesh>
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/models/CDC_Iridescent.gltf')
