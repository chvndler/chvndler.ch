/** @format */

import {css, styled, theme} from 'stitches.config'

const VideoWrapperStyles = css({
 boxSizing: 'border-box',
 position: 'relative',
 width: '100%',
 height: 'auto',
 margin: 0,
 padding: 0
})

export const MuxVideoStyles = css('video', {
 width: 'auto',
 height: 'auto',
 zIndex: 1,
 position: 'relative',
 overflow: 'hidden',
 // border: `1px solid ${theme.colors.chxn4A}`,

 // backgroundAttachment: 'fixed',
 // backgroundPosition: 'center',
 // backgroundRepeat: 'no-repeat',
 // backgroundSize: 'cover',
 // objectFit: 'cover',
 // objectPosition: 'center',
 margin: 'auto',
 padding: '0',
 outline: 'none',
 display: 'flex',
 opacity: 1,
 transition: 'opacity 0.5s ease-in-out'
})

const CaptionBoxStyles = css({
 position: 'relative',
 zIndex: 2,
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'flex-start',
 alignItems: 'flex-start',
 width: 'auto',
 height: 'auto',
 margin: 0,
 padding: 4,
 marginTop: 4,
 marginBottom: 8
})

const CaptionTitleStyles = css({
 fontFamily: theme.fonts.latMedStd,
 fontSize: 14,
 position: 'relative',
 zIndex: 2,
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'flex-start',
 alignItems: 'flex-start',
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
 justifyContent: 'flex-start',
 alignItems: 'flex-start',
 width: 'auto',
 height: 'auto',
 margin: 0,
 padding: 0
})

export const VideoWrapper = styled('div', VideoWrapperStyles)
export const CaptionBox = styled('div', CaptionBoxStyles)
export const CaptionTitle = styled('div', CaptionTitleStyles)
export const CaptionOther = styled('div', CaptionOtherStyles)
