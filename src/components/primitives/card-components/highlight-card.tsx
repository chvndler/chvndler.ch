import React from 'react'
import {css, styled} from 'stitches.config'

import {Box} from '@/components/ds'

type CardProps = {
  children?: React.ReactNode
}

const StyledSvgBox = styled(Box, {
  transition: 'color 0.6s ease',
  color: 'inherit',

  '& svg': {
    '&:hover': {
      color: '$tartOrange',
    },
  },

  variants: {
    color: {
      tartOrange: {
        color: '$chxn4',
        '&:hover': {
          color: '$tartOrange',
        },
      },
      maxBlue: {
        color: '$chxn4',
        '&:hover': {
          color: '$maxBlue',
        },
      },
    },
  },
})

const CardStyles = css({
  zIndex: 1,
  appearance: 'none',
  borderRadius: 23,
  border: 'none',
  boxSizing: 'border-box',
  outline: 'none',
  padding: 0,
  margin: 'auto',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 1px',

  flexShrink: 0,
  position: 'relative',
  height: '100%',
  width: 'auto',
})

const StyledCard = styled('div', CardStyles)
export const SvgBox = StyledSvgBox
export const HighlightCard = ({children}: CardProps) => {
  return (
    <>
      <StyledCard>{children}</StyledCard>
    </>
  )
}

SvgBox.displayName = 'SvgBox'
HighlightCard.displayName = 'HighlightCard'
