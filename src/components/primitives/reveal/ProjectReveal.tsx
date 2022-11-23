import React, { useState } from 'react';

import { Container, Grid, Section, Text } from '@/components/ds';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  ContentBox,
  HiddenContent
} from './project.reveal.styles';

export const ProjectReveal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section
      size="3"
      css={{
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Collapsible open={open} onOpenChange={setOpen}>
        <Container size="3" css={{}}>
          <Grid
            align="stretch"
            flow="row"
            columns="3"
            gap="2"
            css={{
              '@md': {
                gridTemplateColumns: 'repeat(1, 1fr)'
              },
              '@sm': {
                gridTemplateColumns: 'repeat(1, 1fr)'
              }
            }}
          >
            <ContentBox alignment="start">P.01</ContentBox>
            <ContentBox alignment="start">P.02</ContentBox>
            <ContentBox alignment="start">P.03</ContentBox>
          </Grid>
        </Container>

        <Container
          size="3"
          css={{
            display: 'flex',
            margin: 'auto',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CollapsibleTrigger asChild>
            <div>{open ? <Text>Hide</Text> : <Text>View more</Text>}</div>
          </CollapsibleTrigger>
        </Container>

        <Container size="2" css={{ display: 'flex', flexDirection: 'column', gap: '3' }}>
          <CollapsibleContent>
            <HiddenContent>
              <Text>@radix-ui/colors</Text>
            </HiddenContent>

            <HiddenContent>
              <Text>@radix-ui/colors</Text>
            </HiddenContent>

            <HiddenContent>
              <Text>@radix-ui/colors</Text>
            </HiddenContent>
          </CollapsibleContent>
        </Container>
      </Collapsible>
    </Section>
  );
};
