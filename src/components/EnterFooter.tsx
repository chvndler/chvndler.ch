import { AppBar, Box, Text } from '@/ui';
import { TimeCode } from '@/components/TimeCode';
import { ThemeToggle } from '@/components/ThemeToggle';


export const EnterFooter = () => {
  return (
    <>
      <AppBar
        size='2'
        css={{
          display: 'flex',
          flexDirection: 'row',
          margin: 'auto',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'space-between',
          zIndex: '9999',
          backgroundColor: 'transparent',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Box
          css={{
            width: '150px',
            paddingLeft: '20px',
            paddingRight: '10px',
            margin: '0',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Text
            size='1'
            css={{
              fontSize: '10px',
              fontFamily: '$pragmaticaExtended',
              fontWeight: 'normal',
              lineHeight: '34px',
              color: '$mauveA6',
              '&:hover': {
                color: '$mauveA8',
              },
            }}
          >
            Copyright © 2022
          </Text>
        </Box>


        {/* <!-- ENTER SYSTEM --> */}
        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '150px',
            padding: '0',
            margin: '0',
            '@sm': {
              display: 'none',
            },
          }}
        >
          <TimeCode />
        </Box>
        {/* <!-- END ! SYSTEM --> */}

        {/* <!-- THEME SWITCH --> */}
        <Box
          css={{
            paddingRight: '20px',
            paddingLeft: '10px',
            paddingTop: '0',
            paddingBottom: '0',
            lineHeight: '34px',
            display: 'flex',
            justifyContent: 'flex-end',
            width: '150px',
            margin: 0,
            alignItems: 'right',
          }}
        >
          <ThemeToggle />
        </Box>
        {/* <!-- END ! THEME SWITCH --> */}
      </AppBar>
    </>
  );
};
