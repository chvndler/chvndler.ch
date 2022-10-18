import Link from 'next/link';
import React from 'react';

import { Box, Container, Flex, Grid, InlineLink, Paragraph, Section, Text } from '@/components/ds';
import { Icxn } from '@/components/icons/icxn';
import { Avatar } from '@/components/primitives/avatar';

export const AboutMe = () => {
  return (
    <>
      <Container size="2" css={{ marginBottom: 20, backgroundColor: '$chxn3' }}>
        <Flex
          css={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            padding: 4
          }}
        >
          <Link href="/" passHref>
            <Box as="a" css={{}}>
              <Avatar
                size="2"
                alt="Chandler Chappell"
                src="https://pbs.twimg.com/profile_images/1570572396913999872/eu5obCWK_reasonably_small.jpg"
                fallback="C"
              />
            </Box>
          </Link>

          <Link href="https://twitter.com/chvndlerch" passHref target="_blank" rel="norefferer">
            <Box as="a" css={{ color: '$twitter' }}>
              <Icxn variant="Twitter" />
            </Box>
          </Link>
        </Flex>
      </Container>

      <Container size="2" css={{}}>
        <Paragraph
          css={{
            fontFamily: '$rightGroteskText',
            fontSize: 18,
            fontWeight: '600',
            lineHeight: 1.2,
            textAlign: 'center'
          }}
        >
          The focus in the moment is building <InlineLink href="/">Atelier® Design</InlineLink>, to silence the noise in
          design culture. My passion is to make simple, beautiful and performant web experiences.
        </Paragraph>
      </Container>

      <Section size="2" css={{}}>
        <Container size="1" css={{}}>
          <Grid
            align="stretch"
            flow="row"
            columns="2"
            gap="4"
            css={{
              '@md': {
                gridTemplateColumns: 'repeat(2, 1fr)'
              },
              '@sm': {
                gridTemplateColumns: 'repeat(1, 1fr)'
              }
            }}
          >
            <Box as="a" css={{}}>
              <Text css={{}}>ONE</Text>
            </Box>
            <Box as="a" css={{}}>
              <Text css={{ fontSize: 16, fontFamily: '$rightGroteskText', fontWeight: 'bold', lineHeight: '2' }}>
                Project 2
              </Text>
              <Text css={{ fontSize: 12, fontFamily: '$rightGroteskText', lineHeight: '1.2' }}>
                My passion is to make simple, beautiful and performant web experiences.
              </Text>
            </Box>
            <Box as="a" css={{}}>
              <Text css={{}}>THREE</Text>
            </Box>
          </Grid>
        </Container>
      </Section>
    </>
  );
};
