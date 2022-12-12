import {css, styled, theme} from 'stitches.config'

const trackStyles = css({
 height: '100%',
 display: 'flex',
 alignItems: 'flex-start',
 justifyContent: 'flex-start',
 flexDirection: 'column',
 margin: 'auto',
 padding: 2,
 gap: 2,
})

const StyledTitle = css({
 font: theme.fonts.panB,
 fontSize: 18,
 color: theme.colors.chxn4,
 lineHeight: 'normal',
 letterSpacing: 0.2,
})

const StyledArtist = css({
 font: theme.fonts.latMedExtd,
 fontSize: 11.5,
 color: theme.colors.chxn3,
 lineHeight: 'normal',
 letterSpacing: 0.3,
})

const StyledContainer = css({
 // border: '1px solid lightslategray',
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'center',
 alignItems: 'center',
 width: '100%',
 height: '100%',
 padding: 8,
 borderRadius: 24,
 boxSizing: 'border-box',
})

const TrackBackStyles = css({
 transition: 'all 0.6s ease',
 willChange: 'transform',
 boxShadow: `0 0 13px 1px ${theme.colors.slateA9}`,
 borderRadius: 22,
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'center',
 alignItems: 'center',
 width: 'auto',
 height: 'auto',
 paddingLeft: 0,
 paddingRight: 18,
 paddingTop: 0,
 paddingBottom: 0,
 boxSizing: 'border-box',
})

const albumBox = css({
 position: 'relative',
 padding: 0,
 margin: 'auto',
 alignItems: 'center',
})

export const TrackBox = styled('div', trackStyles)
export const TrackTitle = styled('h3', StyledTitle)
export const TrackArtist = styled('span', StyledArtist)
export const TrackContainer = styled('div', StyledContainer)
export const TrackBackground = styled('div', TrackBackStyles)
export const AlbumBox = styled('div', albumBox)
