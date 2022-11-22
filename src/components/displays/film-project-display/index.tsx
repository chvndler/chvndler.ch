import { theme } from 'stitches.config';

import { Box, Container, Grid, Section, Space } from '@/components/ds';
import { Aspect } from '@/components/primitives/aspect-ratio';

/**
 *
 * @render - project grid component.
 *
 */

export const FilmProjects = () => {
  return (
    <Section size={'4'}>
      <Container size={'3'} css={{}}>
        <Grid columns={'3'} justify={'between'} align={'center'} gap={'3'} css={{ width: '100%' }}>
          <Aspect>
            <Box
              css={{
                backgroundColor: theme.colors.mauve12,
                borderRadius: 26,
                width: 'auto',
                height: '100%',
                border: `3px solid ${theme.colors.tartOrange}`
              }}
            />
          </Aspect>
          <Aspect>
            <Box
              css={{
                backgroundColor: theme.colors.mauve12,
                borderRadius: 26,
                width: 'auto',
                height: '100%',
                border: `3px solid ${theme.colors.tartOrange}`
              }}
            />
          </Aspect>
          <Aspect>
            <Box
              css={{
                backgroundColor: theme.colors.mauve12,
                borderRadius: 26,
                width: 'auto',
                height: '100%',
                border: `3px solid ${theme.colors.tartOrange}`
              }}
            />
          </Aspect>
        </Grid>
        <Space size={'1'} />
        <Grid columns={'2'} justify={'between'} align={'center'} flow={'row'} gap={'3'} css={{ width: '100%' }}>
          <Aspect>
            <Box
              css={{
                backgroundColor: theme.colors.mauve12,
                borderRadius: 26,
                width: 'auto',
                height: '100%',
                border: `3px solid ${theme.colors.tartOrange}`
              }}
            />
          </Aspect>
          <Aspect>
            <Box
              css={{
                backgroundColor: theme.colors.mauve12,
                borderRadius: 26,
                width: 'auto',
                height: '100%',
                border: `3px solid ${theme.colors.tartOrange}`
              }}
            />
          </Aspect>
        </Grid>
      </Container>
    </Section>
  );
};

FilmProjects.displayName = 'FilmProjects';
