import { Container, Flex, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { NoteEntry } from '@/components/primitives/NoteEntry';
import { notes } from '@/lib/notes';
import { RelativeFooter } from '~/components/layout/app-footer/relative-footer';

const NotesPage = () => {
  return (
    <>
      <PageLayout>
        <Container size="2">
          <Text
            css={{
              color: '$chxn7',
              fontFamily: '$druk',
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: '-0.05rem',
              textAlign: 'center'
            }}
          >
            NOTES
          </Text>
        </Container>

        <Container size="2" css={{ padding: 20 }}>
          <Flex css={{ flexDirection: 'column' }}>
            {notes.map((entry) => {
              return <NoteEntry key={entry.title} title={entry.title} note={entry.note} />;
            })}
          </Flex>
        </Container>
      </PageLayout>
      <RelativeFooter />
    </>
  );
};

export default NotesPage;
