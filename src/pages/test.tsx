import { Box, Container, Section } from '@/ui';
import { Badge } from 'atelier.ds';
import { ColorBar } from '@/components/ColorBar';
import { MnmlLight } from '@/components/logo/mnml-light';


const Test = () => {
  return (
    <>
      <Box css={{ backgroundColor: '$mauve1' }}>

        <ColorBar />

        <Section size='3'>

          <Container size='2' css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
            <Badge size='2' variant='lime'>
              atelier badge
            </Badge>
          </Container>


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
      </Box>
    </>
  );
};


export default Test;
