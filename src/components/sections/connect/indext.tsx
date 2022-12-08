import {Container, Flex, PassLink, Section, Text} from '@/components/ds'

export const ConnectSection = () => {
  return (
    <Section size="1" css={{paddingTop: 30}}>
      <Container size="1" css={{paddingLeft: 28, paddingRight: 28}}>
        <Flex
          css={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 'auto',
            justifyContent: 'center',
            '@sm': {
              justifyContent: 'flex-start',
            },
          }}>
          <PassLink href="https://twitter.com/chvndlerch/">
            <Text
              css={{
                color: '$sage9',
                lineHeight: '1',
                fontFamily: '$tStar',
                textTransform: 'uppercase',
                fontSize: 13,
                fontWeight: '600',
                textAlign: 'left',
                letterSpacing: '0.04rem',
                margin: 0,
                marginRight: 6,
                padding: 1,
                '&:hover': {
                  color: '$slate1',
                  backgroundColor: '$twitter',
                  cursor: 'pointer',
                },
              }}>
              TWITTER →
            </Text>
          </PassLink>
          <PassLink href="https://github.com/chvndler/">
            <Text
              css={{
                color: '$sage9',
                lineHeight: '1',
                fontFamily: '$tStar',
                textTransform: 'uppercase',
                fontSize: 13,
                fontWeight: '600',
                textAlign: 'left',
                letterSpacing: '0.04rem',
                margin: 0,
                marginLeft: 6,
                padding: 1,
                '&:hover': {
                  color: '$slate1',
                  backgroundColor: '$github',
                  cursor: 'pointer',
                },
              }}>
              GITHUB →
            </Text>
          </PassLink>
        </Flex>
      </Container>
    </Section>
  )
}
