import { Container, Section, Text } from '@/components/ds';
import { RelativeFooter } from '@/components/layout/app-footer/relative-footer';
import { PageLayout } from '@/components/layout/page';
import { NoteEntry } from '@/components/primitives/NoteEntry';
import { notes } from '@/lib/notes';

const NotesPage = () => {
  return (
    <>
      <PageLayout>
        <Section size={'4'}>
          <Container size={'2'}>
            <Text
              css={{
                color: '$chxn7',
                fontFamily: '"Lateral Extended Bold", sans-serif',
                fontSize: 22,
                fontWeight: 'bold',
                letterSpacing: '-0.05rem',
                textAlign: 'center'
              }}
            >
              notes
            </Text>
          </Container>

          <Container size="2" css={{ padding: 20 }}>
            {notes.map((entry) => {
              return <NoteEntry key={entry.title} title={entry.title} note={entry.note} />;
            })}
          </Container>
        </Section>
      </PageLayout>
      <RelativeFooter />
    </>
  );
};

export default NotesPage;
