import Link from 'next/link';
import { styled } from 'stitches.config';

import { Box, Container, Flex, Heading } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { HeroSection } from '@/components/sections/hero';

const StyledNoteDiv = styled(Box, {
  boxSizing: 'border-box',
  padding: 12,
  marginBottom: 10,
  marginTop: 10,
  backgroundColor: '$grayA2',
  borderRadius: 12
});

const StyledNoteTitle = styled('div', {
  boxSizing: 'border-box',
  padding: 4,
  margin: 0,
  fontFamily: '$telegraf',
  fontSize: 16,
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
  fontSize: 16,
  fontWeight: 'normal',
  color: '$chxn4',
  textAlign: 'left'
});

export const NoteDiv = StyledNoteDiv;
export const Note = StyledNote;
export const NoteTitle = StyledNoteTitle;

const NotesPage = () => {
  return (
    <PageLayout>
      <HeroSection size="1" color="default" alignment="center" css={{ padding: 0, paddingTop: '100px' }}>
        <Container size="1" css={{ padding: 20 }}>
          <Heading
            css={{
              fontSize: '2.2rem',
              fontFamily: '$telegraf',
              color: '$chxn4',
              fontWeight: '600',
              lineHeight: '60px',
              letterSpacing: '-0.01rem',
              padding: 0,
              margin: 0,
              width: 'auto',
              '@md': {
                fontSize: '1.8rem',
                lineHeight: '40px'
              }
            }}
          >
            NOTES
          </Heading>
        </Container>
      </HeroSection>
      <Container size="2" css={{ padding: 20 }}>
        <Flex css={{ flexDirection: 'column' }}>
          {/* <!-- BEGIN NOTES --> */}
          {/* <!-- BEGIN NOTES --> */}
          {/* <!-- BEGIN NOTES --> */}
          {/* <!-- BEGIN NOTES --> */}
          <NoteDiv>
            <NoteTitle>N.04</NoteTitle>
            <Note>
              follow me on{' '}
              <Link href="https://youtube.com/" target="_blank" passHref>
                are.na
              </Link>
            </Note>
          </NoteDiv>

          <NoteDiv>
            <NoteTitle>N.03</NoteTitle>
            <Note>every twice in awhile.</Note>
          </NoteDiv>

          <NoteDiv>
            <NoteTitle>N.02</NoteTitle>
            <Note>it's not that i'm not right, i'm just not right now..</Note>
          </NoteDiv>

          <NoteDiv>
            <NoteTitle>N.01</NoteTitle>
            <Note>what inspires you. what makes you excited about the future.</Note>
          </NoteDiv>
          {/* <!-- END NOTES --> */}
          {/* <!-- END NOTES --> */}
          {/* <!-- END NOTES --> */}
          {/* <!-- END NOTES --> */}
        </Flex>
      </Container>
    </PageLayout>
  );
};

export default NotesPage;
