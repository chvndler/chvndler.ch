/** @format */

import React from 'react'
import {styled, theme} from 'stitches.config'

import type {ArchiveMetaProps} from '@/components/common/archiveMeta'

import {BackLink, BodyContainer, Box, Container, PassLink, Space} from '../ds'
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
        <LinkBox>
          <BackLink>
            <StyledLink>Back</StyledLink>
          </BackLink>
          <PassLink href={'/'}>
            <StyledLink>Index</StyledLink>
          </PassLink>
        </LinkBox>
        <LogoLink>
          <PassLink href={'/archive'}>
            <ArchiveLogo width={'110'} />
          </PassLink>
        </LogoLink>
        <Box css={{width: '100%', maxWidth: '130px'}} />
      </LogoBox>

      <BodyContainer css={{fontFamily: theme.fonts.hyperlegible}}>
        <Container size={'article'} css={{fontFamily: theme.fonts.hyperlegible}}>
          {children}
        </Container>
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
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  width: '100%',
  maxWidth: '37rem',
  paddingTop: '1.2rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  margin: 'auto',
  mixBlendMode: 'difference',
  gap: '1rem'
})

const LinkBox = styled('div', {
  maxWidth: '130px',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignContent: 'center',
  alignItems: 'center',
  gap: '0.6rem'
})

const StyledLink = styled('span', {
  color: theme.colors.white,
  fontFamily: theme.fonts.system,
  letterSpacing: 'normal',
  fontSize: 14,
  fontWeight: 600,
  textDecoration: 'none',
  // textTransform: 'uppercase',
  '&:hover': {
    cursor: 'pointer'
  }
})

const LogoLink = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '130px',
  width: '100%',
  color: theme.colors.white,
  mixBlendMode: 'difference'
})
