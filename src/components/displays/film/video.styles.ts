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
 width: '100%',
 height: '100%',
 zIndex: 1,
 position: 'relative',
 overflow: 'hidden',
 overflowX: 'hidden',
 overflowY: 'hidden',

 backgroundAttachment: 'fixed',
 backgroundPosition: 'center',
 backgroundRepeat: 'no-repeat',
 backgroundSize: 'cover',
 objectFit: 'cover',
 objectPosition: 'center',
 margin: 'auto',
 padding: 'auto',
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
 padding: 4
})

const CaptionTitleStyles = css({
 fontFamily: theme.fonts.latMedExtd,
 fontSize: 12,
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
 fontFamily: theme.fonts.scto,
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
