import Image from 'next/image'
import {css, keyframes, styled} from 'stitches.config'

const yellowMove = keyframes({
  '40%': {transform: 'translate(40vw, 0vh)'},
  '80%': {transform: 'translate(0vw, 0vh)'},
})

const yellowCircle = css({
  position: 'absolute',
  top: '-30vw',
  right: '-50vw',
  width: '150vw',
  height: '150vw',

  animationName: `${yellowMove}`,
  animationDuration: '20s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
})

const pinkMove = keyframes({
  '40%': {transform: 'translate(-40vw, 0vh)'},
  '80%': {transform: 'translate(0vw, -20vh)'},
})

const pinkCircle = css({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '80vw',
  height: '90vw',
  animationName: `${pinkMove}`,
  animationDuration: '10s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
})

export const Yellow = styled(Image, yellowCircle, {})
export const Pink = styled(Image, pinkCircle, {})
