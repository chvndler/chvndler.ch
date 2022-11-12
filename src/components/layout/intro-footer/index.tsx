import { Box, Container, Flex, Separator, Space, Text } from '@/components/ds';
import { DottedLine } from '@/components/ds/dotted-line';
import { PassLink } from '@/components/primitives/pass-link';

export const IntroFooter = () => {
  return (
    <Box css={{ zIndex: 999, position: 'fixed', bottom: 0, width: '100vw', padding: 18, border: '1px solid black' }}>
      <Container size={'2'} css={{ paddingLeft: 28, paddingRight: 28 }}>
        <Text
          css={{
            color: '$sage8',
            fontFamily: '$inter',
            fontSize: 11,
            fontWeight: 'normal',
            lineHeight: '30px'
          }}
        >
          © 2022 CDC. All rights reserved.
        </Text>
        <DottedLine />
        <Space size={'0'} />
        <Flex css={{ height: 16, alignItems: 'center' }}>
          <PassLink href="https://twitter.com/chvndlerch">
            <Text
              css={{
                color: '$sage9',
                fontFamily: '$inter',
                fontSize: 10,
                fontWeight: 500,
                lineHeight: '15px',
                '&:hover': { color: '$twitter' }
              }}
            >
              Twitter
            </Text>
          </PassLink>
          <Separator color={'sage'} decorative orientation={'vertical'} css={{ margin: '0 15px' }} />
          <PassLink href="https://github.com/chvndler">
            <Text
              css={{
                color: '$sage9',
                fontFamily: '$inter',
                fontSize: 10,
                fontWeight: 500,
                lineHeight: '15px',
                '&:hover': { color: '$github' }
              }}
            >
              GitHub
            </Text>
          </PassLink>
          <Separator color={'sage'} decorative orientation={'vertical'} css={{ margin: '0 15px' }} />
          <PassLink href="https://github.com/chvndler/chvndler.ch">
            <Text
              css={{
                color: '$sage9',
                fontFamily: '$inter',
                fontSize: 10,
                fontWeight: 500,
                lineHeight: '15px',
                '&:hover': { color: '$mauve12' }
              }}
            >
              View Source
            </Text>
          </PassLink>
        </Flex>
      </Container>
    </Box>
  );
};
