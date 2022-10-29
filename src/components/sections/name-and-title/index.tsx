import { Container, Section, Text } from '@/components/ds';

export const NameAndTitle = () => {
  return (
    <Section size="1" css={{}}>
      <Container size="1" css={{ paddingLeft: 28, paddingRight: 28 }}>
        <Text
          css={{
            color: '$blue9',
            lineHeight: '1.6',
            fontFamily: '$neueMontreal',
            textTransform: 'uppercase',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: '-0.02em',

            '@sm': {
              textAlign: 'left'
            }
          }}
        >
          Chandler Ch®
        </Text>
        <Text
          css={{
            color: '$sage9',
            lineHeight: '1',
            fontFamily: '$inter',
            // textTransform: 'uppercase',
            fontSize: 12.5,
            fontWeight: 'normal',
            textAlign: 'center',
            letterSpacing: '-0.02em',

            '@sm': {
              textAlign: 'left'
            }
          }}
        >
          Front-End Developer / Designer
        </Text>
      </Container>
    </Section>
  );
};
