import { Container, Flex, Space, Text } from '@/components/ds';
import { Icxn } from '@/components/icons/atlr-icxns';
import { TestPageLayout } from '@/components/layout/test-page';

const TokenTesting = () => {
  return (
    <>
      <TestPageLayout>
        <Container size={'2'}>
          <Text
            css={{
              lineHeight: '1',
              color: '$chxn9',
              fontFamily: '$system',
              fontSize: 32,
              fontWeight: 600,

              textAlign: 'center'
            }}
          >
            All rights reserved.
          </Text>
          <Space size={'2'} />
          <Text
            css={{
              lineHeight: '1',
              color: '$mauve10',
              fontFamily: '$mono',
              fontSize: 12,
              fontWeight: 600,

              textAlign: 'center'
            }}
          >
            © COPYRIGHT 2022
          </Text>

          <Space size={'2'} />
          <Text css={{ color: '$chxn4', fontFamily: '$latBoldStd', fontSize: 32, fontWeight: 'bold' }}>
            Lorem Ipsum
          </Text>
          <Text css={{ color: '$chxn4', fontFamily: '$latMedStd', fontSize: 32, fontWeight: 500 }}>Lorem Ipsum</Text>
          <Text css={{ color: '$chxn4', fontFamily: '$latRegStd', fontSize: 32, fontWeight: 400 }}>Lorem Ipsum</Text>
          <Space size={'2'} />
          <Text css={{ color: '$chxn4', fontFamily: '$latBoldExtd', fontSize: 32, fontWeight: 600 }}>Lorem Ipsum</Text>
          <Text css={{ color: '$chxn4', fontFamily: '$latMedExtd', fontSize: 32, fontWeight: 500 }}>Lorem Ipsum</Text>
          <Text css={{ color: '$chxn4', fontFamily: '$latRegExtd', fontSize: 32, fontWeight: 400 }}>Lorem Ipsum</Text>
        </Container>

        <Container size={'1'}>
          <Flex css={{ justifyContent: 'flex-start', gap: 8 }}>
            <Icxn variant={'Twitter'} />
            <Icxn variant={'GitHub'} />
          </Flex>
        </Container>
      </TestPageLayout>
    </>
  );
};

export default TokenTesting;
