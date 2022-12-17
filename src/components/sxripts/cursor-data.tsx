/** @format */

import React, {useEffect, useState} from 'react'
import {theme} from 'stitches.config'

import {Box, Text} from '@/components/ds'

const Value = () => {
 const [display, setDisplay] = useState('')

 useEffect(() => {
  const format = (num: string | number, pad: number) => {
   return num.toString().padStart(pad, '0')
  }

  const setFromEvent = (event: {clientX: string | number; clientY: string | number}) => {
   const x = format(event.clientX, 4)
   const y = format(event.clientY, 5)
   setDisplay(`X: ${x} Y: ${y}`)
  }

  window.addEventListener('mousemove', setFromEvent)

  return () => {
   window.removeEventListener('mousemove', setFromEvent)
  }
 }, [])

 return (
  /*
   * Be sure to use a monospace font -
   * needed because the text will be constantly changing.
   */
  <Text
   css={{
    color: theme.colors.mauveA9,
    fontSize: 13,
    fontFamily: theme.fonts.mono,
    lineHeight: '28px',
    letterSpacing: '0.03rem',
    marginLeft: 4
   }}>
   {display}
  </Text>
 )
}

export const CursorData = () => {
 return (
  <Box
   css={{
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 0,
    position: 'relative',
    textAlign: 'center'
   }}>
   <Text
    css={{
     color: theme.colors.mauveA9,
     fontSize: 13,
     fontFamily: theme.fonts.mono,
     lineHeight: '28px',
     letterSpacing: '0.03rem',
     marginRight: 4
    }}>
    CDC® MIT –
   </Text>
   <Value />
  </Box>
 )
}

export default CursorData
