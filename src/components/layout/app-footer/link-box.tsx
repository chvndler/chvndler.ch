/** @format */

import React from 'react'
import {styled} from 'stitches.config'

type LinkBoxProps = {
  children?: React.ReactNode
}

const StyledLinkBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '@md': {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
})

const LinkPackage = StyledLinkBox

export const LinkBox = ({children}: LinkBoxProps) => {
  return (
    <>
      <LinkPackage>{children}</LinkPackage>
    </>
  )
}
