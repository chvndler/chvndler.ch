import {css, styled, theme} from 'stitches.config'

const CursorTextStyles = css({
 fontSize: 12,
 color: theme.colors.chxn4,
 textAlign: 'center',
 fontFamily: theme.fonts.mono,
 fontWeight: 500,

 lineHeight: 'auto',
 letterSpacing: 'normal',
 textTransform: 'uppercase',
 margin: 0,
 marginRight: 10,
})

export const CursorText = styled('span', CursorTextStyles)
