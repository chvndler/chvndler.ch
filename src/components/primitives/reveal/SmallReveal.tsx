import React, { useState } from 'react';

import { Container, InlineLink, Section, Text } from '@/components/ds';

import { Collapsible, CollapsibleContent, CollapsibleTrigger, HiddenContent } from './small.reveal.styles';

export const SmallReveal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section
      size={'3'}
      css={{
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Collapsible open={open} onOpenChange={setOpen}>
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
              <Container size={'1'} css={{}}>
                The focus in the moment is building <InlineLink href="https://ady.world/">Atelier® Design</InlineLink>,
                to silence the noise within the design culture. I enjoy building simple, beautiful and performant web
                interfaces and experiences.
              </Container>
            </HiddenContent>
          </CollapsibleContent>
        </Container>
      </Collapsible>
    </Section>
  );
};
