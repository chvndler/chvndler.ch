/** @format */

import {styled} from 'stitches.config'

export const Canvas = styled('div', {
  zIndex: 3,
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  position: 'absolute',
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: 'auto',
  margin: 'auto',
  padding: '0',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center'
})

export const FixedCanvas = styled('div', {
  zIndex: 1,
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  position: 'fixed',
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  minWidth: '100vw'
})
