import React from 'react'

import {Container, Grid, Paragraph, Space} from '@/components/ds'

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
        <Container size={'1'} css={{}}>
          <Paragraph css={{textAlign: 'center'}}>
            Crafting interfaces.
            <br />
            Building polished software and web experiences. Experimenting with web3 and 3D code.
            Here are some of my current and past projects.
          </Paragraph>
        </Container>
        <Space size={'3'} />
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
                <ProjectTitle>Atelier.Kit</ProjectTitle>
                <ProjectDescription>
                  A component toolkit for high performing React apps and sites. – v0.41.3.beta
                </ProjectDescription>
              </ProjectCard>

              <ProjectCard>
                <ProjectTitle>Personal</ProjectTitle>
                <ProjectDescription>
                  A component toolkit for high performing React apps and sites. – v0.41.3.beta
                </ProjectDescription>
              </ProjectCard>

              <ProjectCard>
                <ProjectTitle>Icxns</ProjectTitle>
                <ProjectDescription>
                  Light-weight runner for the esbuild compiler
                </ProjectDescription>
              </ProjectCard>
              <ProjectCard>
                <ProjectTitle>Atelier.Labs</ProjectTitle>
                <ProjectDescription>
                  Tests how different web browsers round geometry to pixels, dp, etc.
                </ProjectDescription>
              </ProjectCard>
            </Grid>
          </Container>
        </Project>
      </ProjectContainer>
    </>
  )
}
