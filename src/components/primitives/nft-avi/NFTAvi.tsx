/** @format */

import React from 'react'

import {PassLink} from '@/components/ds'
import {Avatar} from '@/components/primitives/avatar'

const gitlink = 'https://github.com/chvndler'
const nyoling = 'https://avatars.githubusercontent.com/u/70621588?s=96&v=4'

const AviNFT = () => {
  return (
    <PassLink href={gitlink}>
      <Avatar interactive size={'4'} shape={'circle'} alt={'Chandler®'} fallback={'C'} src={nyoling} />
    </PassLink>
  )
}

export const NFTAvi = AviNFT
