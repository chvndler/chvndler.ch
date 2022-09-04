import { prjcts as items } from '@/lib/prjcts';
import { Badge, Container, Flex, Grid, Section, Text } from '@/ui';
import React from 'react';
import Link from 'next/link';
import { ProjectEntry } from './ProjectEntry';


export const Project = () => {
  return (
    <>
      <Section size={2}>
        <Badge size={2} variant='tartOrange'>projects</Badge>
      </Section>
      <Grid
        css={{
          gap: 6,
          gridTemplateColumns: '1fr 1fr 1fr',
          '@md': {
            gridTemplateColumns: '1fr 1fr',
          },
          '@sm': {
            gridTemplateColumns: '1fr',
          },
        }}>
        {items.map(entry => {
          return <ProjectEntry key={entry.key} title={entry.title} href={entry.url}
                               description={entry.description} />;
        })}
      </Grid>


      <Section size={2}>
        <Container
          size={3}
          css={{
            paddingTop: '50px',
            paddingBottom: '50px',
            display: 'flex',
            alignItems: 'center',
            margin: 'auto',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          <Flex direction='row' align='stretch' justify='start' wrap='wrap' css={{ marginBottom: '30px' }}>
            <Link href='https://github.com/chvndler/' target='_blank' rel='noreferrer' passHref>
              <Text
                as='a'
                css={{
                  textAlign: 'center',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  color: '$mauve8',
                  paddingTop: '4px',
                  fontFamily: '$pragmaticaExtended',
                  fontSize: '14px',
                }}
              >
                GitHub
              </Text>
            </Link>

            <Link href='https://twitter.com/chv_ndler/' target='_blank' rel='noreferrer' passHref>
              <Text
                as='a'
                css={{
                  textAlign: 'center',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  color: '$mauve8',
                  paddingTop: '4px',
                  fontFamily: '$pragmaticaExtended',
                  fontSize: '14px',
                }}
              >
                Twitter
              </Text>
            </Link>
          </Flex>
        </Container>
      </Section>
    </>
  );
};
