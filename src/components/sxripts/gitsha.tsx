/** @format */

import React from 'react'
import {css, styled, theme} from 'stitches.config'

import {Box, PassLink, Text} from '@/components/ds'

const GitSha = () => {
 const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
 const owner = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER
 const slug = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG

 const color = 'gray'

 if (sha && owner && slug) {
  const shortSha = sha.substring(0, 6)
  const href = 'https://github.com/' + owner + '/' + slug + '/tree/' + sha

  return (
   <Box css={{}}>
    <SHAFlex>
     <LeadingText css={{color: theme.colors.chxn4}}>GIT_SHA</LeadingText>

     <Box css={{lineHeight: '1'}}>
      <Text css={{lineHeight: '18px', fontSize: 16, color: theme.colors.heliotrope}}>⥂</Text>
     </Box>

     <PassLink href={href}>
      <ShaText css={{color: `#${shortSha}`}}>{shortSha}</ShaText>
     </PassLink>
    </SHAFlex>
   </Box>
  )
 } else {
  // fallback
  return (
   <Box css={{display: 'inline-block', width: '87px'}}>
    <Text
     css={{
      fontFamily: theme.fonts.mono,
      fontSize: 10,
      whiteSpace: 'nowrap',
      display: 'inline-block',
      marginLeft: 2,
      letterSpacing: 'body',
      color: color,
      textTransform: 'uppercase'
     }}>
     ERROR
    </Text>
   </Box>
  )
 }
}

export default GitSha

/**
 *
 *
 * styles
 *
 *
 *
 */

const SHAFlexBox = styled('div', {
 margin: 'auto',
 height: 'auto',
 display: 'inline-flex',
 flexDirection: 'row',
 alignItems: 'left',
 justifyContent: 'flex-start',
 alignContent: 'center',
 verticalAlign: 'middle',
 gap: '12px'
})

const styledSHA = css({
 margin: 'auto',
 alignContent: 'center',
 alignItems: 'center',
 fontFamily: theme.fonts.mono,
 fontSize: 11,
 fontWeight: 500,
 lineHeight: '23px',
 textTransform: 'uppercase'
})

const styledText = css({
 margin: 'auto',
 alignContent: 'center',
 alignItems: 'center',
 fontFamily: theme.fonts.mono,
 fontSize: 11,
 fontWeight: 500,
 lineHeight: '23px',
 textTransform: 'uppercase'
})

export const SHAFlex = styled(SHAFlexBox, {})
export const ShaText = styled('p', styledSHA, {})
export const LeadingText = styled('p', styledText, {})
