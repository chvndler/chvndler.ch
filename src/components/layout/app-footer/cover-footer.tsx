import {styled} from 'stitches.config'

import {Flex} from '@/components/ds'
import {Portal} from '@/components/primitives/portal'
import {ThemeSwitch} from '@/components/primitives/theme-switcher'
import {CurrentTime, CursorData} from '@/components/sxripts'

export const CoverFooter = () => {
  return (
    <Portal>
      <Footer>
        <ContentBox alignment="start" css={{'@md': {display: 'none'}}}>
          <Flex css={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <CurrentTime />
            <CursorData />
          </Flex>
        </ContentBox>

        <ContentBox alignment="end" css={{}}>
          <ThemeSwitch />
        </ContentBox>
      </Footer>
    </Portal>
  )
}

const ContentBox = styled('div', {
  display: 'flex',
  width: '100%',
  marginTop: 3,
  marginBottom: 10,
  marginLeft: 0,
  marginRight: 0,
  padding: 0,

  variants: {
    alignment: {
      start: {
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        '@md': {
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      center: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
      end: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        '@md': {
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
  },
})

const StyledFooter = styled('footer', {
  zIndex: '999',
  position: 'fixed',
  bottom: 0,
  boxSizing: 'border-box',
  display: 'flex',
  gap: 2,
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  width: '100vw',
  height: 'auto',
  paddingTop: 'auto',
  paddingBottom: '2rem',
  paddingLeft: '3rem',
  paddingRight: '3rem',
  backgroundColor: 'transparent',
  '@md': {
    padding: 5,
    flexDirection: 'column-reverse',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const Footer = StyledFooter
