/** @format */

import React from 'react'
import {theme, VariantProps} from 'stitches.config'

import {Box, Flex, PassLink, Separator, Space, Text} from '@/components/ds'

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
    <Space size={2} />
    <Flex
     css={{
      margin: 'auto',
      height: 'auto',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'flex-start',
      alignContent: 'center',
      verticalAlign: 'middle',
      gap: '12px'
     }}>
     <Text
      css={{
       margin: 'auto',
       alignContent: 'center',
       alignItems: 'center',
       fontFamily: theme.fonts.mono,
       fontSize: 11,
       fontWeight: 500,
       lineHeight: '23px',
       color: theme.colors.chxn4A,
       textTransform: 'uppercase'
      }}>
      GIT_SHA
     </Text>

     <Box css={{lineHeight: '1'}}>
      <Text css={{lineHeight: '18px', fontSize: 16, color: theme.colors.heliotrope}}>⥂</Text>
     </Box>

     <PassLink href={href}>
      <Text
       css={{
        margin: 'auto',
        alignContent: 'center',
        alignItems: 'center',
        fontFamily: theme.fonts.mono,
        fontSize: 11,
        fontWeight: 500,
        lineHeight: '23px',
        textTransform: 'uppercase',
        color: `#${shortSha}`
       }}>
       {shortSha}
      </Text>
     </PassLink>
    </Flex>
   </Box>
  )
 } else {
  // fallback
  return (
   <Box css={{display: 'inline-block', width: '87px'}}>
    <SeparatorInline color={color} />
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
     {color}
    </Text>
   </Box>
  )
 }
}

type Props = {
 color: string
}

type SeparatorVariantProps = Props & VariantProps<typeof Separator>

const SeparatorInline = ({color}: SeparatorVariantProps) => {
 return <Separator orientation={'horizontal'} color={color} css={{display: 'inline-block', marginLeft: 2}} />
}

export default GitSha
