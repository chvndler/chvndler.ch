import { Box, Section } from '@/ui';
import { Layout } from '@/components/Layout';
import { MnmlLight } from '@/components/logo/mnml-light';


const Test = () => {
  return (
    <>
      <Box css={{ backgroundColor: '$mauve1' }}>
        <Layout title='LAYOUT testing page'>
          <Section size='3'>
            <Box
              css={{
                width: '100%',
                color: '$mauve9',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '10px',
              }}
            >
              <MnmlLight width='160' />
            </Box>
          </Section>
        </Layout>
      </Box>
    </>
  );
};


export default Test;
