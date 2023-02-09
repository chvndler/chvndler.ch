import {styled} from 'stitches.config'

export const VimeoWrapper = styled('div', {
  position: 'relative',
  width: 'auto',
  height: 'auto',
  overflow: 'hidden',
  padding: 0,
  margin: 0,

  objectFit: 'cover',

  '& iframe': {},

  backgroundColor: 'blue'
})

export const Vimeo = styled('div', {
  boxSizing: 'border-box',
  width: 'auto',
  height: 'auto',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
