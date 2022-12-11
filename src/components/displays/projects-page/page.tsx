import {Section} from '@/components/ds'
import {projects} from '@/lib/projects'

import {ProjectEntry} from './project.entry'
import {ProjectCard} from './project.styles'

export const ProjectDisplay = () => {
  return (
    <>
      <Section size={'4'}>
        <ProjectCard>
          {projects.map((entry) => {
            return (
              <ProjectEntry
                key={entry.title}
                title={entry.title}
                summary={entry.summary}
                link={entry.link}
              />
            )
          })}
        </ProjectCard>
      </Section>
    </>
  )
}
