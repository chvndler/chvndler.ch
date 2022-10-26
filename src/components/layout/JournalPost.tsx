import type { Post } from 'contentlayer/generated';

import { Heading, Text } from '@/components/ds';

export const JournalPost = ({ title, summary }: Pick<Post, 'title' | 'summary'>) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Text size="2" css={{ color: '$rhythmA10', lineHeight: '1.4', fontWeight: '500' }}>
        {summary}
      </Text>
    </>
  );
};
