/** @format */

import {theme} from 'stitches.config'

import {Box, Flex, PassLink, Text} from '@/components/ds'

export const R3FFooter = () => {
 return (
  <>
   <Box
    css={{
     position: 'fixed',
     bottom: 0,
     left: 0,
     right: 0,
     paddingBottom: 30,
     zIndex: 100,
     width: 'auto'
    }}>
    <Flex
     css={{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      justifyContent: 'center',
      margin: 'auto',
      width: 'auto',
      userSelect: 'none',
      padding: 6
     }}>
     <Text
      css={{
       color: theme.colors.chxn4,
       textAlign: 'center',
       fontSize: 14,
       fontFamily: theme.fonts.latRegExtd
      }}>
      built with
     </Text>
     <PassLink href={'https://threejs.org/'}>
      <Text
       css={{
        color: theme.colors.chxn7,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: theme.fonts.latMedExtd,
        '&:hover': {
         textDecoration: 'underline',
         decorationColor: theme.colors.chxn4,
         cursor: 'pointer'
        }
       }}>
       three.js
      </Text>
     </PassLink>
    </Flex>

    <Flex
     css={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      width: 'auto',
      userSelect: 'none'
     }}>
     <PassLink
      href={
       'https://github.com/chvndler/chvndler.ch/blob/main/src/pages/projects/three.tsx'
      }>
      <Text
       css={{
        color: theme.colors.chxn3,
        textAlign: 'center',
        fontSize: 13,
        fontFamily: theme.fonts.panSb,
        width: 'auto',
        maxWidth: 300
       }}>
       view source
      </Text>
     </PassLink>
    </Flex>
   </Box>
  </>
 )
}
