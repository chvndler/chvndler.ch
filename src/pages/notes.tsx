import { styled } from 'stitches.config';

import { Container, Flex, Heading } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { HeroSection } from '@/components/sections/hero';

const StyledNoteTitle = styled('div', {
  boxSizing: 'border-box',
  padding: 4,
  margin: 0,
  fontFamily: '$pragExtended',
  fontSize: 14,
  fontWeight: 'bold',
  color: '$chxn3',
  textAlign: 'left',
  lineHeight: '14px'
});

const StyledNote = styled('div', {
  boxSizing: 'border-box',
  padding: 4,
  margin: 0,
  fontFamily: '$aero',
  fontSize: 14,
  fontWeight: 'normal',
  color: '$chxn4',
  textAlign: 'left'
});

export const Note = StyledNote;
export const NoteTitle = StyledNoteTitle;

const NotesPage = () => {
  return (
    <PageLayout>
      <HeroSection size="1" color="default" alignment="responsiveLeft" css={{ padding: 0, marginTop: 150 }}>
        <Container size="2">
          <Heading
            css={{
              fontSize: 62,
              fontFamily: '$neueMontreal',
              color: '$chxn4',
              fontWeight: 'bold',
              letterSpacing: '-0.1rem',
              lineHeight: '63px',
              paddingBottom: 40,
              paddingTop: 0,
              margin: 0,
              width: 'auto',
              '@md': {
                letterSpacing: '-0.3rem',
                fontSize: 38,
                lineHeight: '30px'
              }
            }}
          >
            NOTES
          </Heading>

          <Flex css={{ flexDirection: 'column' }}>
            <NoteTitle>N.01</NoteTitle>
            <Note>what inspires you. what makes you excited about the future.</Note>
          </Flex>
        </Container>
      </HeroSection>
    </PageLayout>
  );
};

export default NotesPage;
