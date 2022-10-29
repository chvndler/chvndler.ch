import { Container, Flex, Section, Text } from '@/components/ds';
import { PassLink } from '@/components/primitives/pass-link';

export const ConnectSection = () => {
  return (
    <Section size="1" css={{ paddingTop: 30 }}>
      <Container size="1" css={{ paddingLeft: 28, paddingRight: 28 }}>
        <Flex
          css={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 'auto',
            justifyContent: 'center',
            '@sm': {
              justifyContent: 'flex-start'
            }
          }}
        >
          <PassLink href="https://twitter.com/chvndlerch/">
            <Text
              css={{
                color: '$sage9',
                lineHeight: '1',
                fontFamily: '$subtle',
                textTransform: 'uppercase',
                fontSize: 12,
                fontWeight: 'normal',
                textAlign: 'left',
                letterSpacing: '0.03em',
                margin: 0,
                marginRight: 6,
                padding: 1,
                '&:hover': {
                  color: '$slate1',
                  backgroundColor: '$twitter',
                  cursor: 'pointer'
                }
              }}
            >
              TWITTER →
            </Text>
          </PassLink>
          <PassLink href="https://github.com/chvndler/">
            <Text
              css={{
                color: '$sage9',
                lineHeight: '1',
                fontFamily: '$subtle',
                textTransform: 'uppercase',
                fontSize: 12,
                fontWeight: 'normal',
                textAlign: 'left',
                letterSpacing: '0.03em',
                margin: 0,
                marginLeft: 6,
                padding: 1,
                '&:hover': {
                  color: '$slate1',
                  backgroundColor: '$githubAlt',
                  cursor: 'pointer'
                }
              }}
            >
              GITHUB →
            </Text>
          </PassLink>
        </Flex>
      </Container>
    </Section>
  );
};
