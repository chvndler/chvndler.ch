/** @format */

import {styled, theme} from 'stitches.config'

import {Box, Grid, InlineLink, Paragraph, PassLink, Space} from '@/components/ds'
import {CDCLogo} from '@/components/logos'

import GitSha from '../sxripts/gitsha'

const projects = '/projects/web'
const email = 'mailto:chvndler.ch@icloud.com'
const twitter = 'https://twitter.com/chvndlerch'
const github = 'https://github.com/chvndler'
const three = '/projects/three'
const archive = '/archive'
const film = '/projects/film'

export const PageHeader = () => {
 return (
  <TopBox>
   <TopFlex>
    <TopGrid>
     <Box className={'right'}>
      <PassLink href={'/'}>
       <CDCLogo />
      </PassLink>
      <Name>CHANDLER CHAPPELL</Name>
      <GitSha />
     </Box>

     <Box className={'left'}>
      <Paragraph
       css={{
        fontSize: 15,
        fontFamily: theme.fonts.latMedStd,
        color: theme.colors.chxn4
       }}>
       FRONT-END DEVELOPER AND DESIGNER
      </Paragraph>
      <Space size={'1'} />
      <Paragraph
       css={{
        fontSize: 15,
        letterSpacing: '0.02rem',
        fontFamily: theme.fonts.latRegStd,
        color: theme.colors.chxn4
        //textTransform: 'uppercase'
       }}>
       90's kid– creating cool and taking notes. Enjoying the internet and open-source. I'm very component-driven, the
       focus in the moment is telling stories through every detail that make a web experience worth having. Experienced
       in graphic, and motion design, as well as three.js. I am currently looking for my next role,{' '}
       <InlineLink href={email}>let's connect.</InlineLink>
      </Paragraph>

      <Space size={'2'} />
      <Grid columns={2} gap={3}>
       <Box>
        <PassLink href={email}>
         <PersonalLink css={{fontFamily: theme.fonts.latRegStd}}>hello@chvndler.ch</PersonalLink>
        </PassLink>
        <PassLink href={''}>
         <PersonalLink css={{fontFamily: theme.fonts.latRegStd}}>+1 (336) 244-8939</PersonalLink>
        </PassLink>
       </Box>
       <Box>
        <PassLink href={projects}>
         <PersonalLink css={{fontFamily: theme.fonts.latRegStd}}>web projects</PersonalLink>
        </PassLink>
        <PassLink href={film}>
         <PersonalLink css={{fontFamily: theme.fonts.latRegStd}}>film projects</PersonalLink>
        </PassLink>
        <PassLink href={archive}>
         <PersonalLink css={{fontFamily: theme.fonts.latRegStd}}>writings</PersonalLink>
        </PassLink>
        <Space size={'1'} />
        <PassLink href={twitter}>
         <PersonalLink css={{fontFamily: theme.fonts.latRegStd}}>twitter</PersonalLink>
        </PassLink>
        <PassLink href={github}>
         <PersonalLink css={{fontFamily: theme.fonts.latRegStd}}>github</PersonalLink>
        </PassLink>
        <PassLink href={three}>
         <PersonalLink css={{fontFamily: theme.fonts.latRegStd}}>three.js</PersonalLink>
        </PassLink>
       </Box>
      </Grid>
     </Box>
    </TopGrid>
   </TopFlex>
  </TopBox>
 )
}

const styledTopBox = styled('div', {
 color: theme.colors.chxn4,
 boxSizing: 'border-box',
 zIndex: '9',
 position: 'fixed',
 top: '0',
 right: '0',
 width: '100%',
 alignItems: 'left',
 justifyContent: 'left',
 display: 'flex',
 padding: '3rem',
 '@md': {
  paddingTop: '2rem',
  padding: '1.5rem'
 }
})

const styledFlexBox = styled('div', {
 boxSizing: 'border-box',
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'center',
 justifyContent: 'center',
 width: '100%',
 height: '100%'
})

const styledGrid = styled('div', {
 boxSizing: 'border-box',
 display: 'grid',
 gridTemplateColumns: 'repeat(2, 1fr)',
 width: '100%',
 gap: '18px',

 '@md': {
  gridTemplateColumns: 'repeat(1, 1fr)'
 }
})

const styledName = styled('h1', {
 color: theme.colors.chxn3,
 fontFamily: theme.fonts.latMedStd,
 fontSize: 14,
 paddingTop: 6
})

const styledPersonalLink = styled('div', {
 fontFamily: theme.fonts.latMedStd,
 fontSize: 14,
 lineHeight: '1.4'
})

export const TopBox = styledTopBox
export const TopFlex = styledFlexBox
export const TopGrid = styledGrid

export const Name = styledName
export const PersonalLink = styledPersonalLink
