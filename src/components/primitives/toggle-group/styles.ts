import * as RadioGroup from '@radix-ui/react-radio-group'
import {styled, theme} from 'stitches.config'

const radioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'row',
  gap: 2,
  border: `2px solid ${theme.colors.slate10}`,
  padding: 2,
  borderRadius: 999,
  fontFamily: 'inherit'
})

const radioGroupItem = styled(RadioGroup.Item, {
  all: 'unset',
  transition: 'all 250ms ease-in-out',
  zIndex: 2,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  margin: 'auto',
  backgroundColor: 'transparent',
  width: 52,
  height: 25,
  borderRadius: 999,

  variants: {},
  defaultVariants: {},

  '&[data-state="checked"]': {
    backgroundColor: theme.colors.heliotrope,
    color: theme.colors.slate1
  },
  '&[data-state="unchecked"]': {
    backgroundColor: 'transparent',
    color: theme.colors.slate11,

    '&:hover': {
      transition: 'all 250ms ease-in-out',
      color: theme.colors.slate10
    }
  }
})

const radioGroupIndicator = styled(RadioGroup.Indicator, {
  transition: 'all 250ms ease-in-out',
  boxSizing: 'border-box',
  userSelect: 'none',
  zIndex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  margin: 'auto',
  width: '100%',
  height: '100%',
  position: 'relative',
  backgroundColor: theme.colors.portage,
  color: theme.colors.slate2,
  borderRadius: 999,

  '&::after': {
    zIndex: 9999,
    content: '""',
    display: 'flex',
    width: 48,
    height: 20,
    borderRadius: 999,
    color: theme.colors.slate11
  },
  '&[data-state="checked"]': {
    backgroundColor: theme.colors.heliotrope,
    color: theme.colors.slate1
  },
  '&[data-state="checked"]::after': {}
})

const label = styled('label', {
  position: 'absolute',
  zIndex: 9999,
  display: 'flex',
  lineHeight: 1,
  margin: 'auto',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,

  // color: theme.colors.slate4,

  fontFamily: theme.fonts.system,
  fontSize: 13,
  fontWeight: 500
})

export const Root_ToggleGroup = radioGroupRoot
export const GroupItem_ToggleGroup = radioGroupItem
export const GroupIndicator_ToggleGroup = radioGroupIndicator
export const Label_ToggleGroup = label
