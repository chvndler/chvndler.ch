import React from 'react'

import type {ArchiveMetaProps} from '@/components/common/archiveMeta'

import {BodyContainer, Container} from '../ds'
import ArchiveHead from './ArchiveHead'

type LayoutProps = {
  children: React.ReactNode
  customMeta?: ArchiveMetaProps
}

export const WEBSITE_HOST_URL = 'https://chvndler.ch'

export const ArchiveLayout = ({children, customMeta}: LayoutProps): JSX.Element => {
  return (
    <>
      <ArchiveHead customMeta={customMeta} />

      <BodyContainer>
        <Container size={'2'}>{children}</Container>
      </BodyContainer>
    </>
  )
}
