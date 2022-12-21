/** @format */

import {Container, Flex, PassLink, Section, Space} from '@/components/ds'

import {SocialLink} from './link.styles'

/**
 *
 * @render - project grid component.
 *
 */

export const SocialLinkDisplay = () => {
  return (
    <Section size={'4'}>
      <Container size={'3'} css={{display: 'flex', margin: 'auto', justifyContent: 'flex-start'}}>
        <Flex
          css={{
            rowGap: '14px',
            marginLeft: '-7px',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
          }}>
          <PassLink href={'https://twitter.com/chvndlerch/'}>
            <SocialLink twitter>TWITTER</SocialLink>
          </PassLink>
          <PassLink href={'https://github.com/chvndler/'}>
            <SocialLink github>GITHUB</SocialLink>
          </PassLink>
          <PassLink href={'https://www.are.na/chvndler-ch/'}>
            <SocialLink arena>ARE.NA</SocialLink>
          </PassLink>
          <PassLink href={'https://read.cv/chvn/'}>
            <SocialLink readcv>READ.CV</SocialLink>
          </PassLink>
        </Flex>
      </Container>
      <Space size={'1'} />
      <Container size={'3'} css={{display: 'flex', margin: 'auto', justifyContent: 'flex-start'}}>
        <Flex
          css={{
            rowGap: '14px',
            marginLeft: '-7px',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
          }}>
          <PassLink href={'https://www.instagram.com/chv.ndler/'}>
            <SocialLink instagram>INSTAGRAM</SocialLink>
          </PassLink>
          <PassLink href={'https://www.linkedin.com/in/chvndler/'}>
            <SocialLink linkedin>LINKEDIN</SocialLink>
          </PassLink>
          <PassLink href={'https://www.facebook.com/chv.ndler/'}>
            <SocialLink facebook>FACEBOOK</SocialLink>
          </PassLink>
        </Flex>
      </Container>
    </Section>
  )
}

SocialLinkDisplay.displayName = 'SocialLinkDisplay'
