import React from 'react';

import { Container, Flex, Section } from '@/components/ds';

import { ProjectBox, ProjectDescription, ProjectTitle } from './s';

export const ProjectSection = () => {
  return (
    <>
      <Section size="2" css={{ paddingTop: 40 }}>
        <Container size="2">
          <Flex css={{ flexDirection: 'column', justifyContent: 'center' }}>
            <ProjectBox>
              <ProjectTitle>
                <strong>Atelier</strong>®DS
              </ProjectTitle>
              <ProjectDescription>An ever— expanding ecosystem of essential design components.</ProjectDescription>
            </ProjectBox>

            <ProjectBox>
              <ProjectTitle>Typesxript</ProjectTitle>
              <ProjectDescription>
                Opinionated and essential starting code for next.js, React, Atelier®, and Typescript.
              </ProjectDescription>
            </ProjectBox>

            <ProjectBox>
              <ProjectTitle>
                <strong>atlr</strong>.icxns
              </ProjectTitle>
              <ProjectDescription>Not your basic icon set.</ProjectDescription>
            </ProjectBox>
          </Flex>
        </Container>
      </Section>
    </>
  );
};
