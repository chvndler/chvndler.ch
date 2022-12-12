import React from 'react'
import {styled, theme} from 'stitches.config'

import {Box, Flex} from '@/components/ds'

type NoteProps = {
 title: string
 note: string
}

const StyledNoteDiv = styled(Box, {
 boxSizing: 'border-box',
 maxWidth: '480px',
 width: '100%',
 paddingTop: 8,
 paddingBottom: 8,
 paddingRight: 4,
 paddingLeft: 4,
 marginBottom: 20,
 marginTop: 20,
 backgroundColor: 'transparent',
 /**
  * @testing
  * border: `1px solid ${theme.colors.chxn3}`
  */
})

const StyledNoteTitle = styled('div', {
 boxSizing: 'border-box',
 padding: 4,
 margin: 0,
 fontFamily: theme.fonts.mono,
 fontSize: 13,
 fontWeight: 300,
 color: theme.colors.chxn3,
 textAlign: 'left',
 lineHeight: '14px',
})

const StyledNote = styled('div', {
 boxSizing: 'border-box',
 padding: 4,
 margin: 0,
 fontFamily: theme.fonts.mono,
 fontSize: 13,
 fontWeight: 400,
 color: theme.colors.chxn4,
 textAlign: 'left',
 letterSpacing: 'normal',
})

const StyledCopyright = styled('div', {
 fontFamily: theme.fonts.mono,
 color: theme.colors.chxn3,
 lineHeight: '1.8',
 boxSizing: 'border-box',
 padding: 4,
 margin: 0,
 fontSize: 12,
 fontWeight: 400,
 textAlign: 'center',
 letterSpacing: 'normal',
})

export const NoteDiv = StyledNoteDiv
export const Note = StyledNote
export const NoteTitle = StyledNoteTitle
export const CopyrightText = StyledCopyright

export const NoteEntry = ({title, note}: NoteProps) => {
 return (
  <Flex css={{flexDirection: 'column'}}>
   <NoteDiv>
    <NoteTitle>{title}</NoteTitle>
    <Note>{note}</Note>
   </NoteDiv>
  </Flex>
 )
}
