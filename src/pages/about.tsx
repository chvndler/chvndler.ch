import { theme } from 'stitches.config';

import { Box, Text } from '@/components/ds';
import { AtlrNavbar } from '@/components/layout/atlr.navbar';

const AboutPage = () => {
  return (
    <>
      <AtlrNavbar />
      <Box css={{ zIndex: 9999, position: 'fixed', top: 0, left: 0, padding: 20 }}>
        <Text
          css={{
            color: '$chxn9',
            fontSize: 32,
            fontFamily: theme.colors.tartOrange,
            fontWeight: 'bold',
            lineHeight: '80px'
          }}
        >
          ABOUT
          <br />
          ME.
        </Text>
      </Box>
    </>
  );
};

export default AboutPage;
