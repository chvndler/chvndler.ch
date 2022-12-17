/** @format */

import {Box, Space, Text} from '@/components/ds'
import {Icxn} from '@/components/icons/icxn'

import {
 ImageOverlay,
 PlacementBox,
 ProjectButton,
 ProjectButtonPlacement,
 ProjectCard,
 ProjectSummary,
 ProjectTitle
} from './project-card.css'

type PProps = {
 pTitle: string
 pRepository: string
 pSummary: string
}

export const ProjectEntry = ({pTitle, pRepository, pSummary}: PProps) => {
 return (
  <ProjectCard css={{userSelect: 'none'}}>
   <PlacementBox css={{}}>
    <ProjectTitle as={'a'} href={pRepository} target={'_blank'} rel={'norefferer'}>
     {pTitle}
    </ProjectTitle>
    <Space size={'1'} />
    <ProjectSummary>{pSummary}</ProjectSummary>
    <Space size={'2'} />
   </PlacementBox>

   <ProjectButtonPlacement>
    <ProjectButton target={'_blank'} rel={'norefferer'} href={pRepository}>
     <Box
      css={{
       lineHeight: '18px',
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'flex-start',
       margin: 'auto',
       gap: '10',
       alignContent: 'middle'
      }}>
      <Icxn variant={'GitHub'} />
      <Text
       css={{
        fontFamily: '$helvRound',
        fontSize: 13,
        lineHeight: '20px',
        marginLeft: 6
       }}>
       View on GitHub
      </Text>
     </Box>
    </ProjectButton>
   </ProjectButtonPlacement>

   <ImageOverlay></ImageOverlay>
  </ProjectCard>
 )
}
