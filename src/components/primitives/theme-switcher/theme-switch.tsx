/** @format */

import {useTheme} from 'next-themes'
import React from 'react'

import {IconButton} from '@/components/ds'
import {Icxn} from '@/components/icons/atlr-icxns'

import {ToolTipWrapper} from '../tool-tip'

export const ThemeSwitch = () => {
  const {theme, setTheme} = useTheme()

  return (
    <ToolTipWrapper tip={'toggle theme'}>
      <IconButton onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))} aria-label='Toggle Theme'>
        <Icxn variant={'Sun'} />
      </IconButton>
    </ToolTipWrapper>
  )
}
