import { Box, Flex, Space, Text } from '@/ui';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';


export const ConnectSection = () => {
  return (
    <>
      <Text css={{ fontFamily: '$pragmaticaExtended', fontSize: '18px', fontWeight: '600', color: '$tartOrange' }}>
        connect
      </Text>
      <Space size={1} />
      
      {/* <!-- hold blog until complete -->
          <Text css={{ fontFamily: '$pragmaticaExtended', fontSize: '13px', fontWeight: '500', color: '$mauve11', lineHeight: '18px' }}>
            blog
          </Text>
          --> */}
      
      <Box css={{ marginTop: '4px', marginBottom: '4px' }}>
        <Link href='https://www.twitter.com/chv_ndler' passHref>
          <Text as='a' target='_blank' rel='noreferrer noopener' css={{
            fontFamily: '$pragmaticaExtended',
            fontSize: '13px',
            fontWeight: '400',
            color: '$mauve11',
            lineHeight: 'normal',
          }}>
            twitter
          </Text>
        </Link>
      </Box>
      <Box css={{ marginTop: '4px', marginBottom: '4px' }}>
        <Link href='https://www.github.com/chvndler' passHref>
          <Text as='a' target='_blank' rel='noreferrer noopener' css={{
            fontFamily: '$pragmaticaExtended',
            fontSize: '13px',
            fontWeight: '400',
            color: '$mauve11',
            lineHeight: 'normal',
          }}>
            github
          </Text>
        </Link>
      </Box>
      
      <Box css={{ marginTop: '4px', marginBottom: '4px' }}>
        <Link href='https://www.instagram.com/chv.ndler' passHref>
          <Text as='a' target='_blank' rel='noreferrer noopener' css={{
            fontFamily: '$pragmaticaExtended',
            fontSize: '13px',
            fontWeight: '400',
            color: '$mauve11',
            lineHeight: 'normal',
          }}>
            instagram
          </Text>
        </Link>
      </Box>
      <Box css={{ marginTop: '4px', marginBottom: '4px' }}>
        <Link href='https://www.instagram.com/chv.ndler' passHref>
          <Text as='a' target='_blank' rel='noreferrer noopener' css={{
            fontFamily: '$pragmaticaExtended',
            fontSize: '13px',
            fontWeight: '400',
            color: '$mauve11',
            lineHeight: 'normal',
          }}>
            email
          </Text>
        </Link>
      </Box>
      <Box css={{ marginTop: '4px', marginBottom: '4px' }}>
        <GitHub />
      </Box>
    </>
  );
};


function GitHub() {
  return (
    
    <Flex css={{ display: 'inline-flex', direction: 'row', padding: '4px', margin: 'auto' }}>
      <GitHubLogoIcon />
      
      <Link href='https://github.com/chvndler/chvndler.ch' passHref>
        <Text as='a' target='_blank' rel='noopener noreferrer' css={{
          fontFamily: '$pragmaticaExtended',
          fontSize: '13px',
          fontWeight: '500',
          color: '$mauve11',
          lineHeight: 'normal',
          
          paddingLeft: '6px',
        }}>
          @chvndler/chvndler.ch
        </Text>
      </Link>
    </Flex>
  );
}
