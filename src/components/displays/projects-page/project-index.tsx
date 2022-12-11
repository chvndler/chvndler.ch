import React from 'react'

import {Container, Grid} from '@/components/ds'

import {
  Project,
  ProjectCard,
  ProjectContainer,
  ProjectDescription,
  ProjectTitle,
} from './project.styles'

export const ProjectIndex = () => {
  return (
    <>
      <ProjectContainer>
        <Project>
          <Container size={'3'} css={{margin: 'auto', padding: 2}}>
            <Grid
              columns={'2'}
              justify={'center'}
              align={'center'}
              gap={'3'}
              css={{
                width: 'auto',
                '@md': {gridTemplateColumns: 'repeat(1fr 1fr)'},
              }}>
              <ProjectCard>
                <ProjectTitle>Atelier® Kit</ProjectTitle>
                <ProjectDescription>
                  An ever– expanding library of React components and primitives. Actively
                  developing.
                </ProjectDescription>
              </ProjectCard>

              <ProjectCard>
                <ProjectTitle>Personal.</ProjectTitle>
                <ProjectDescription>
                  This exact website. My corner of the web– where I take notes, experiment, and
                  practice building amazing UI.
                </ProjectDescription>
              </ProjectCard>

              <ProjectCard>
                <ProjectTitle>Atelier® Icxns</ProjectTitle>
                <ProjectDescription>
                  A crisp, little set of interface icons. Use them however you like.
                </ProjectDescription>
              </ProjectCard>

              <ProjectCard>
                <ProjectTitle>ISI® Elite Training</ProjectTitle>
                <ProjectDescription>
                  My previous roles official website, check them out and sign up.
                </ProjectDescription>
              </ProjectCard>

              <ProjectCard>
                <ProjectTitle>TFL© Convention</ProjectTitle>
                <ProjectDescription>
                  A single page app built for ISI® Elite Training.
                </ProjectDescription>
              </ProjectCard>

              <ProjectCard>
                <ProjectTitle>Three</ProjectTitle>
                <ProjectDescription>Some three.js experiments.</ProjectDescription>
              </ProjectCard>
            </Grid>
          </Container>
        </Project>
      </ProjectContainer>
    </>
  )
}
