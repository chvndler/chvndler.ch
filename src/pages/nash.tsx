import { Box, Section } from '@/ui';
import { ColorBar } from '@/components/ColorBar';
import { MnmlLight } from '@/components/logo/mnml-light';
import { MenuDrop } from '@/components/MenuDrop';


const Nash = () => {
  return (
    <>
      <Box css={{ backgroundColor: '$mauve1' }}>
        <ColorBar />

        <MenuDrop />
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
      </Box>
    </>
  );
};


export default Nash;
