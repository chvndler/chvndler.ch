import * as SwitchPrimitive from '@radix-ui/react-switch'
import {styled} from 'stitches.config'

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 37,
  height: 20,
  border: '0.4px',
  borderRadius: 7,
  position: 'relative',
  boxShadow: `inset 0 0 5px 2px $colors$blackA5`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  willChange: 'color',
  '&:focus': {boxShadow: 'none'},
  '&[data-state="checked"]': {
    backgroundColor: '$chxn8',
  },
  '&[data-state="unchecked"]': {
    backgroundColor: '$chxn2',
    boxShadow: `inset 0 0 4px 2px $colors$blackA6`,
  },
})

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 17,
  height: 17,
  borderRadius: 5.6,

  transition: 'transform 200ms',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(18.5px)',
    backgroundColor: '$chxn1',
    boxShadow: `0 3px 4px rgba(0,0,0,0.2)`,
  },
  '&[data-state="unchecked"]': {
    transform: 'translateX(1.5px)',
    backgroundColor: '$chxn4',
    boxShadow: `inset 0 0 4px 2px $colors$blackA6`,
  },
})

export const Switch = StyledSwitch
export const SwitchThumb = StyledThumb

export const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
})
