import * as React from 'react'
import type {CSS} from 'stitches.config'

import {GroupIndicator_ToggleGroup, GroupItem_ToggleGroup, Label_ToggleGroup, Root_ToggleGroup} from './styles'

interface _radioGroupProps {
  defaultValue?: string
  value?: string
  asChild?: boolean
  disabled?: boolean
  name?: string
  required?: boolean
  orientation?: 'horizontal' | 'vertical'
  loop?: boolean
  onValueChange?: (value: string) => void
}

type RadioGroupPrimitiveProps = _radioGroupProps & React.ComponentProps<typeof Root_ToggleGroup>
type RadioGroupProps = RadioGroupPrimitiveProps & {css?: CSS}

const RadioGroupRoot = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, forwardedRef) => {
  return (
    <Root_ToggleGroup {...props} ref={forwardedRef} defaultValue={props.defaultValue} css={{...props.css}}>
      {props.children}
    </Root_ToggleGroup>
  )
})

type _groupItemProps = {
  value?: string
  disabled?: boolean
  required?: boolean
  asChild?: boolean
}

type GroupItemPrimitiveProps = _groupItemProps & React.ComponentProps<typeof GroupItem_ToggleGroup>
type GroupItemProps = GroupItemPrimitiveProps & {css?: CSS}

const GroupItemRoot = React.forwardRef<HTMLButtonElement, GroupItemProps>((props, ref) => {
  return (
    <GroupItem_ToggleGroup {...props} ref={ref} css={{...props.css}}>
      {props.children}
    </GroupItem_ToggleGroup>
  )
})

type _groupIndicatorProps = {
  asChild?: boolean
  forceMount?: boolean
}

type GroupIndicatorPrimitiveProps = _groupIndicatorProps & React.ComponentProps<typeof GroupIndicator_ToggleGroup>
type GroupIndicatorProps = GroupIndicatorPrimitiveProps & {css?: CSS}

const GroupIndicatorRoot = React.forwardRef<HTMLDivElement, GroupIndicatorProps>((props, ref) => {
  return <GroupIndicator_ToggleGroup {...props} ref={ref} css={{...props.css}} />
})

type LabelPrimitiveProps = React.ComponentProps<typeof Label_ToggleGroup>
type LabelProps = LabelPrimitiveProps & {css?: CSS}

const LabelRoot = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  return (
    <Label_ToggleGroup {...props} ref={ref} css={{...props.css}}>
      <span>{props.children}</span>
    </Label_ToggleGroup>
  )
})

export {
  // ...ROOT_Elm
  RadioGroupRoot as ToggleGroup
}
export {GroupItemRoot as ToggleGroupItem}
export {GroupIndicatorRoot as ToggleGroupIndicator}
export {LabelRoot as ToggleGroupLabel}
