import { Container, Section, Text } from '@/components/ds';

export const ConnectSection = () => {
  return (
    <Section size="2">
      <Container size="1">
        <Text
          css={{
            color: '$sage9',
            lineHeight: '2',
            fontFamily: '$subtle',
            textTransform: 'uppercase',
            fontSize: 12,
            fontWeight: 'normal',
            textAlign: 'left',
            letterSpacing: '0.03em'
          }}
        >
          TWITTER
        </Text>
        <Text
          css={{
            color: '$sage9',
            lineHeight: '2',
            fontFamily: '$subtle',
            textTransform: 'uppercase',
            fontSize: 12,
            fontWeight: 'normal',
            textAlign: 'left',
            letterSpacing: '0.03em'
          }}
        >
          GITHUB
        </Text>
        <Text
          css={{
            color: '$sage9',
            lineHeight: '2',
            fontFamily: '$subtle',
            textTransform: 'uppercase',
            fontSize: 12,
            fontWeight: 'normal',
            textAlign: 'left',
            letterSpacing: '0.03em'
          }}
        >
          SOMETHING LIKE THIS BUT NOT THIS©
        </Text>
      </Container>
    </Section>
  );
};
