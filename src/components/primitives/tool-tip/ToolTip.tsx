import * as Tooltip from '@radix-ui/react-tooltip'
import React from 'react'
import {keyframes, styled, theme} from 'stitches.config'

type TipProps = {
  children?: React.ReactNode
  tip?: string
}

export const ToolTipWrapper = ({children, tip}: TipProps) => {
  return (
    <Tooltip.Provider delayDuration={800} skipDelayDuration={500}>
      <Tooltip.Root delayDuration={800}>
        <Tooltip.Trigger asChild>
          <div>{children}</div>
        </Tooltip.Trigger>
        <TooltipViewport>
          <TooltipContent sideOffset={0} align={'center'}>
            {tip}
          </TooltipContent>
        </TooltipViewport>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

const slideUpAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateY(2px)'},
  '100%': {opacity: 1, transform: 'translateY(0)'},
})

const slideRightAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateX(-2px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'},
})

const slideDownAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateY(-2px)'},
  '100%': {opacity: 1, transform: 'translateY(0)'},
})

const slideLeftAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateX(2px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'},
})

const TooltipViewport = styled(Tooltip.Portal, {
  width: 'max-content',
  maxWidth: 'max-content',
  minWidth: 'max-content',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const TooltipContent = styled(Tooltip.Content, {
  boxSizing: 'border-box',
  font: theme.fonts.panSb,
  fontSize: 12,
  zIndex: 'inherit',
  width: 'fit-content',
  maxWidth: 'max-content',
  minWidth: 'max-content',
  alignContent: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  margin: 'auto',

  /*
  width: 'auto',
  maxWidth: 80,
  minWidth: 'max-content',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
*/
  borderRadius: 50,
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 8,
  paddingRight: 8,
  lineHeight: '13px',
  color: theme.colors.chxn4A,
  backgroundColor: 'transparent',
  border: `2px solid ${theme.colors.chxn4A}`,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '600ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': {animationName: slideDownAndFade},
    '&[data-side="right"]': {animationName: slideLeftAndFade},
    '&[data-side="bottom"]': {animationName: slideUpAndFade},
    '&[data-side="left"]': {animationName: slideRightAndFade},
  },
})
