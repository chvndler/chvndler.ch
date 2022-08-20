import { Box, Flex } from '@/ui';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MnmlLight } from '@/components/logo/mnml-light';


export const NavBar = () => {
  return (
    <Flex
      as='header'
      css={{
        py: '0px',
        paddingLeft: '35px',
        paddingRight: '35px',
        height: '45px',
        justifyContent: 'space-between',
        position: 'fixed',
        margin: '0',
        width: '100vw',
        // backdropFilter: 'blur(12px)',
        // WebkitBackdropFilter: 'blur(12px)',
        // saturate: '200%',
        zIndex: '9999',

        // backgroundColor: '$translucent',
        // backgroundColor: '$chvn2',

        '@sm': {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      }}>


      <Box
        css={{
          paddingTop: '6px',
          lineHeight: '45px',
          width: 'auto',
          margin: '0',
          display: 'inline-flex',
          textDecoration: 'none',
          '&:focus': {
            boxShadow: 'none',
          },
        }}>
        <MnmlLight width='160' />
      </Box>


      <Box
        css={{
          paddingTop: '6px',
          lineHeight: '45px',
          width: 'auto',
          margin: '0',
          display: 'inline-flex',
          justifyContent: 'flex-end',
          alignItems: 'right',
          textDecoration: 'none',
          '&:focus': {
            boxShadow: 'none',
          },
        }}>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};
