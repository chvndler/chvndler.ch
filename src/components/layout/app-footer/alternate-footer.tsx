import { styled, theme } from 'stitches.config';

import { Container, Flex, PassLink } from '@/components/ds';

const twitter = 'https://twitter.com/chvndlerch';
const github = 'https://github.com/chvndler';
const are_na = 'https://www.are.na/chvndler-ch';

export const AlternateFooter = () => {
  return (
    <Container size={'3'} css={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingBottom: 30, zIndex: 100 }}>
      <Flex css={{ flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center', margin: 'auto' }}>
        <PassLink href={twitter} target={'_blank'}>
          <QuickLink>twitter</QuickLink>
        </PassLink>
        <PassLink href={github} target={'_blank'}>
          <QuickLink>github</QuickLink>
        </PassLink>
        <PassLink href={are_na} target={'_blank'}>
          <QuickLink>are.na</QuickLink>
        </PassLink>
      </Flex>
    </Container>
  );
};

const QuickLink = styled('span', {
  fontSize: 14,
  color: theme.colors.chxn3,
  textAlign: 'center',
  fontFamily: theme.fonts.panSb,
  '&:hover': {
    color: theme.colors.chxn4
  },
  '@sm': {
    fontSize: 15
  }
});
