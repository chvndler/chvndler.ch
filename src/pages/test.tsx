import { Box } from '@/ui';
import { PageLayout } from '@/components/layout/page';
import { styled } from '@/lib/stitches.config';

const ContentContent = styled('div', {
  boxSizing: 'border-box',
  maxWidth: '800px',
  width: '100%',
  height: 'auto',
  padding: 20,
  margin: 'auto',
  paddingTop: '52px',
});

const Test = () => {
  return (
    <>
      <Box css={{ backgroundColor: '$mauve1' }}>
        <PageLayout title='Test'>
          <ContentContent>YO</ContentContent>
        </PageLayout>
      </Box>
    </>
  );
};


export default Test;
