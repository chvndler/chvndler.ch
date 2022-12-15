/** @format */

import {useGLTF} from '@react-three/drei'
import {useLoader} from '@react-three/fiber'
import React from 'react'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

import {Loader} from '../loader'

export const CDCExpirementalModel = () => {
 const gltf = useLoader(GLTFLoader, '/models/CDC.gltf')

 return (
  <React.Suspense fallback={<Loader />}>
   <primitive object={gltf.scene} />
  </React.Suspense>
 )
}

useGLTF.preload('/models/CDC.gltf')
