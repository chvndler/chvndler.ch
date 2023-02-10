import {styled, theme} from 'stitches.config'

import {Box, Flex} from '@/components/ds'
import {CDCLogo} from '@/components/logos'

export const DesignHeader = () => {
  return (
    <div>
      <Wrapper>
        <Flex direction='row' align='center' justify='between'>
          <CDCLogo width={'90'} />

          <Box>
            <Flex direction='row' align='center' justify='between' gap={4}>
              <HeaderLink>WORK</HeaderLink>
              <HeaderLink>INFO</HeaderLink>
            </Flex>
          </Box>
        </Flex>
      </Wrapper>
    </div>
  )
}

const HeaderLink = styled('span', {
  fontFamily: theme.fonts.latBoldStd,
  fontWeight: 'bold',
  fontSize: 24
})

const Wrapper = styled('div', {
  padding: 10
})
