import React from 'react'
import {styled, theme} from 'stitches.config'

import type {ArchiveMetaProps} from '@/components/common/archiveMeta'

import {BodyContainer, Container, PassLink, Space} from '../ds'
import {ArchiveLogo} from '../logos/archive'
import {RelativeFooter} from './app-footer'
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
      <LogoBox>
        <PassLink href={'/archive'}>
          <ArchiveLogo width={'200'} />
        </PassLink>
      </LogoBox>

      <BodyContainer>
        <Container size={'2'}>{children}</Container>
      </BodyContainer>

      <Space size={2} />
      <Container css={{textAlign: 'center'}}>
        <ArchiveLogo width={'80'} />
      </Container>
      <Space size={2} />

      <RelativeFooter />
    </>
  )
}

const LogoBox = styled('div', {
  zIndex: '999',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  paddingTop: '3rem',
  margin: 'auto',
  color: theme.colors.white,
  mixBlendMode: 'difference',
})
