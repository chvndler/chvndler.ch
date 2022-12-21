/** @format */

import {css, styled, theme} from 'stitches.config'

const VideoWrapperStyles = css({
  boxSizing: 'border-box',
  position: 'relative',
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0
})

export const MuxVideoStyles = css('video', {
  width: 'auto',
  height: 'auto',
  zIndex: 1,
  position: 'relative',
  paddingBottom: 0,
  overflow: 'hidden',
  margin: '0',
  padding: '0',
  outline: 'none',
  display: 'flex',
  opacity: 1,
  objectFit: 'contain',
  transition: 'opacity 0.5s ease-in-out'
})

const CaptionBoxStyles = css({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'auto',
  height: 'auto',
  margin: 0,
  padding: 4,
  marginTop: 4,
  marginBottom: 8,

  border: `2px solid ${theme.colors.slate8}`,
  borderRadius: 50,
  background: theme.colors.chxn1
})

const CaptionTitleStyles = css({
  fontFamily: theme.fonts.latBoldStd,
  fontSize: 16,
  color: theme.colors.chxn4,
  textTransform: 'uppercase',
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: 'auto',
  height: 'auto',
  margin: 0,
  padding: 0
})

const CaptionOtherStyles = css({
  fontFamily: theme.fonts.latRegStd,
  fontSize: 14,
  color: theme.colors.chxn3,
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'auto',
  height: 'auto',
  margin: 0,
  padding: 0
})

const onTopCaption = css({
  position: 'absolute',
  top: 0,
  left: 0,
  paddingTop: 30,
  paddingLeft: 60,
  paddingRight: 20,
  paddingBottom: 0,
  zIndex: 40,
  margin: 0,
  width: '100%',
  height: 'auto',
  fontFamily: theme.fonts.latBoldStd,
  fontSize: 24,
  color: theme.colors.chxn1,
  mixBlendMode: 'difference'
})

export const VideoWrapper = styled('div', VideoWrapperStyles)
export const CaptionBox = styled('div', CaptionBoxStyles)
export const CaptionTitle = styled('div', CaptionTitleStyles)
export const CaptionOther = styled('div', CaptionOtherStyles)

export const OnTopCaption = styled('div', onTopCaption)
