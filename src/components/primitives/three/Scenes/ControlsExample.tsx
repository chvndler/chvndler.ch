import {Box, Loader, OrbitControls, PerspectiveCamera, Sparkles} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import React, {Suspense} from 'react'

import {FixedCanvas} from '@/components/ds'

export const JustACube = () => {
 return (
  <Suspense fallback={<Loader />}>
   <FixedCanvas css={{}}>
    <Canvas>
     <OrbitControls />
     <Box>
      <meshBasicMaterial wireframe />
      <axesHelper />
     </Box>
    </Canvas>
   </FixedCanvas>
  </Suspense>
 )
}

const SparklesRR = ({random, size, amount, ...props}: SparkleProps) => {
 const sizes = React.useMemo(() => {
  return new Float32Array(Array.from({length: amount}, () => Math.random() * size))
 }, [size, amount])

 return (
  <>
   <Sparkles {...props} size={random ? sizes : size} color='blue' count={amount} />
   <OrbitControls />
   <Box>
    <meshBasicMaterial wireframe />
   </Box>
   {/* <axesHelper />*/}
   <PerspectiveCamera position={[2, 2, 2]} makeDefault />
  </>
 )
}

export const ControlsExample = () => (
 <FixedCanvas css={{}}>
  <Canvas>
   <SparklesRR random size={3} amount={100} />
  </Canvas>
 </FixedCanvas>
)

type SparkleProps = {
 random: boolean
 size: number
 amount: number
}
