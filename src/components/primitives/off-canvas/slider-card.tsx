/** @format */

import React from 'react'
import {styled} from 'stitches.config'

import {Box} from '@/components/ds'

type SliderProps = {
 children?: React.ReactNode
}

const StyledSvgBox = styled(Box, {
 transition: 'color 0.6s ease',
 color: 'inherit',

 '& svg': {
  '&:hover': {
   color: '$tartOrange'
  }
 },

 variants: {
  color: {
   tartOrange: {
    color: '$chxn4',
    '&:hover': {
     color: '$tartOrange'
    }
   },
   maxBlue: {
    color: '$chxn4',
    '&:hover': {
     color: '$maxBlue'
    }
   }
  }
 }
})

const ContentCard = styled('div', {
 zIndex: '4',
 appearance: 'none',
 borderRadius: 20,
 border: 'none',
 boxSizing: 'border-box',
 outline: 'none',
 padding: 20,
 margin: 'auto',
 display: 'flex',
 justifyContent: 'flex-start',
 textAlign: 'left',
 alignContent: 'left',
 alignItems: 'left',
 verticalAlign: 'middle',
 WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

 boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',

 backgroundColor: 'transparent',
 textDecoration: 'none',
 color: 'inherit',
 flexShrink: 0,
 position: 'relative',
 height: '100%',
 width: '100%',
 minHeight: '250px',
 minWidth: '420px',
 maxHeight: '250px',
 maxWidth: '420px',

 '@md': {
  height: '100%',
  width: '100%',
  minHeight: '350px',
  minWidth: '320px',
  maxHeight: '350px',
  maxWidth: '320px'
 }
})

export const SvgBox = StyledSvgBox

export const SliderCard = ({children}: SliderProps) => {
 return (
  <>
   <ContentCard>{children}</ContentCard>
  </>
 )
}
