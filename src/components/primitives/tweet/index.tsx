import Link from 'next/link'
import React from 'react'

import {Box, Card, Flex, InlineLink, Text} from '@/components/ds'
import {Icxn} from '@/components/icons/icxn'
import {Avatar} from '@/components/primitives/avatar'

type TweetType = {
  url: string
  userUrl: string
  avatar: string
  children: React.ReactNode
  author: string
  username: string
  date: string
}

export const Tweet = ({url, userUrl, children, avatar, author, username, date}: TweetType) => {
  return (
    <Card
      variant="interactive"
      css={{
        width: '80vw',
        maxWidth: 400,
        padding: 18,
        '@media (hover: hover)': {
          '& .icon-toggle': {
            opacity: '0.6',
          },
          '&:hover': {
            '& .icon-toggle': {
              opacity: '1',
            },
          },
        },
        '&:focus': {
          '& .icon-toggle': {
            opacity: '1',
          },
        },
      }}>
      <Flex css={{justifyContent: 'space-between', marginBottom: '$2'}}>
        <Flex css={{alignItems: 'center'}}>
          <Box css={{marginRight: '$2'}}>
            <Avatar size="2" alt={author} src={avatar} fallback={author.charAt(0)} />
          </Box>
          <Box>
            <Text
              size="3"
              css={{fontWeight: 500, marginBottom: -5, '&:hover': {textDecoration: 'underline'}}}>
              {author}
            </Text>
            <Text variant="gray" size="2" css={{color: '$gray10'}}>
              @{username} · <InlineLink href={userUrl}>Follow</InlineLink>
            </Text>
          </Box>
        </Flex>
        <Box css={{color: '$gray10'}}>
          <Box className="icon-toggle" css={{transition: 'opacity 50ms linear', color: '$twitter'}}>
            <Link href={url} passHref>
              <Icxn variant="Twitter" />
            </Link>
          </Box>
        </Box>
      </Flex>

      {/* <!-- THE TWEET --> */}
      <Text
        css={{
          fontFamily: '$untitled',
          fontSize: 15,
          lineHeight: '23px',
        }}>
        {children}
      </Text>
      <Text
        css={{
          fontFamily: '$untitled',
          color: '$gray10',
          fontSize: 12,
          lineHeight: 'normal',
          letterSpacing: '-0.01rem',
          paddingTop: 6,
        }}>
        {date}
      </Text>
    </Card>
  )
}
