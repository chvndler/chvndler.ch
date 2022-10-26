import React from 'react';
import { styled } from 'stitches.config';

import { Box, Flex } from '@/components/ds';

type NoteProps = {
  title: string;
  note: string;
};

const StyledNoteDiv = styled(Box, {
  boxSizing: 'border-box',
  padding: 12,
  marginBottom: 10,
  marginTop: 10,
  // backgroundColor: '$slateA1',
  backgroundColor: 'transparent',
  borderRadius: 8
});

const StyledNoteTitle = styled('div', {
  boxSizing: 'border-box',
  padding: 4,
  margin: 0,
  fontFamily: '$neueMontreal',
  fontSize: 12,
  fontWeight: 'normal',
  color: '$sage7',
  textAlign: 'left',
  lineHeight: '14px'
});

const StyledNote = styled('div', {
  boxSizing: 'border-box',
  padding: 4,
  margin: 0,
  fontFamily: '$neueMontreal',
  fontSize: 14,
  fontWeight: '500',
  color: '$sage10',
  textAlign: 'left',
  letterSpacing: 'normal'
});

export const NoteDiv = StyledNoteDiv;
export const Note = StyledNote;
export const NoteTitle = StyledNoteTitle;

export const NoteEntry = ({ title, note }: NoteProps) => {
  return (
    <Flex css={{ flexDirection: 'column' }}>
      <NoteDiv>
        <NoteTitle>{title}</NoteTitle>
        <Note>{note}</Note>
      </NoteDiv>
    </Flex>
  );
};
