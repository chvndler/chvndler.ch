import { theme } from 'stitches.config';

import { FilmProjects } from '@/components/displays/film-project-display';
import { Container, Space, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';

const Film = () => {
  return (
    <>
      <PageLayout page_type={'Production'}>
        <Container size={'3'} css={{}}>
          <Text
            css={{
              textAlign: 'center',
              color: '$chxn4',
              fontSize: 13,
              fontFamily: '"Lateral Extended Medium", sans-serif',
              fontWeight: 500,
              lineHeight: 'auto',
              letterSpacing: ''
            }}
          >
            © MIT FILM PROJECTS
          </Text>
          <Space size={'1'} />
          <Text
            css={{
              textAlign: 'center',
              color: '$chxn4',
              fontSize: 15,
              fontFamily: theme.fonts.panSb,
              fontWeight: 'auto',
              lineHeight: 'auto',
              letterSpacing: ''
            }}
          >
            coming soon.
          </Text>
        </Container>
        <Space size={'3'} />

        <FilmProjects />
      </PageLayout>
    </>
  );
};

export default Film;
