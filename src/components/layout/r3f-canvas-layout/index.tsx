// import { Stats } from '@react-three/drei';
import {extend, Object3DNode} from '@react-three/fiber'
import React, {FC} from 'react'
import {css, styled} from 'stitches.config'
import {OrbitControls, TransformControls} from 'three-stdlib'

import {AtlrNavbar} from '@/components/layout/atlr.navbar'
extend({OrbitControls, TransformControls})

declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>
    transformControls: Object3DNode<TransformControls, typeof TransformControls>
  }
}

type R3FCanvasLayoutProps = {
  children?: React.ReactNode
  htmlChildren?: React.ReactNode
}

export const R3FCanvasLayout: FC<R3FCanvasLayoutProps> = ({children, htmlChildren, ...rest}) => {
  return (
    <>
      <DivHTML>
        <AtlrNavbar />
        {htmlChildren}
      </DivHTML>
      <R3FCanvas {...rest}>
        <StatsModule>{/* <!-- <Stats /> --> */}</StatsModule>
        {/* <!-- <orbitControls /> --> */}
        {/* <!--  <transformControls /> --> */}
        {children}
      </R3FCanvas>
    </>
  )
}

const R3FCanvasStyles = css({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100vh',
  width: '100vw',
  padding: 0,
  margin: 0,
  zIndex: 0,
})

const StyledStats = css({
  top: 'auto',
  bottom: 'auto',
  left: 0,
  right: 0,
})

const StyledHTML = css({
  position: 'relative',
  zIndex: 5,
})

const R3FCanvas = styled('div', R3FCanvasStyles)
const StatsModule = styled('div', StyledStats)
const DivHTML = styled('div', StyledHTML)
