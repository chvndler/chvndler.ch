/** @format */

import {styled, theme} from 'stitches.config'

import {Container, InlineLink, Section, Space} from '@/components/ds'
import {notes} from '@/lib/notes'

import {CopyrightText, NoteEntry} from './entry'

const twitter = 'https://twitter.com/chvndlerch'

export const NotesPageDisplay = () => {
  return (
    <>
      <Section size={'4'}>
        <Container size={'1'} css={{padding: 20}}>
          {notes.map((entry) => {
            return <NoteEntry key={entry.title} title={entry.title} note={entry.note} />
          })}
        </Container>

        <Space size={'2'} />
        <Container size={'1'} css={{margin: 'auto', display: 'flex', justifyContent: 'center'}}>
          <Heading>. . .</Heading>
        </Container>
        <Space size={'2'} />

        <Container size={'1'}>
          <Heading>© NOTES.</Heading>
          <Space size={'1'} />
          <CopyrightText>
            this is where i write. <br />
            things i learn, words to keep, <br />
            the truth.
          </CopyrightText>

          <Space size={'2'} />

          <CopyrightText css={{color: theme.colors.chxn4}}>
            follow me on <InlineLink href={twitter}>twitter</InlineLink>
          </CopyrightText>
        </Container>
      </Section>
    </>
  )
}

/**
 * @styles
 */
const Heading = styled('p', {
  color: theme.colors.chxn13,
  fontFamily: theme.fonts.latMedExtd,
  fontSize: 12,
  textAlign: 'center',
  letterSpacing: '0.05rem',
  lineHeght: '1'
})
