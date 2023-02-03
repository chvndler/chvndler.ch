/** @format */

import {extend, Object3DNode} from '@react-three/fiber'
import React, {FC} from 'react'
import {css, styled} from 'stitches.config'
import {OrbitControls, TransformControls} from 'three-stdlib'

import {AtlrNavbar} from '@/components/layout/atlr.navbar'
import {Portal} from '@/components/primitives/portal'
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
        <Portal>{htmlChildren}</Portal>
      </DivHTML>
      <R3FCanvas {...rest}>
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
  zIndex: 0
})

const StyledHTML = css({
  position: 'relative',
  zIndex: 5
})

const R3FCanvas = styled('div', R3FCanvasStyles)
const DivHTML = styled('div', StyledHTML)

/*
import { useRef, useEffect } from 'react'
import { GridHelper } from 'three'
import { extend, Object3DNode } from '@react-three/fiber'


Create our custom element
class CustomElement extends GridHelper {}

extend({ CustomElement })

// Add types to ThreeElements elements so primitives pick up on it
declare module '@react-three/fiber' {
  interface ThreeElements {
    customElement: Object3DNode<CustomElement, typeof CustomElement>
  }
}

// react-three-fiber will create your custom component and TypeScript will understand it
;<customComponent />
*/
