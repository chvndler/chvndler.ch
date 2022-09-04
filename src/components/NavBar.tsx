import Link from 'next/link';
import { Box, Flex } from '@/ui';
import { ThemeButton } from '@/components/ThemeButton';
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
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        saturate: '150%',
        zIndex: '9999',

        backgroundColor: '$translucent',

        '@sm': {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      }}>


      <Link href='/' passHref>
        <Box
          as='a'
          css={{
            paddingTop: '2px',
            lineHeight: '45px',
            width: 'auto',
            margin: '0',
            display: 'inline-flex',
            textDecoration: 'none',
            '&:focus': {
              boxShadow: 'none',
            },
          }}>
          <MnmlLight width='150' />
        </Box>
      </Link>


      <Box
        css={{
          paddingTop: '12px',
          lineHeight: '45px',
          width: 'auto',
          margin: 0,
          display: 'inline-flex',
          justifyContent: 'flex-end',
          alignItems: 'right',
          textDecoration: 'none',
          '&:focus': {
            boxShadow: 'none',
          },
        }}>
        <ThemeButton />
      </Box>
    </Flex>
  );
};
