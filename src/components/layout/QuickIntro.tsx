/** @format */

import {styled, theme} from 'stitches.config'

import {CDCLogo} from '@/components/logos'

import {Canvas, Container, Paragraph} from '../ds'

export const QuickIntro = () => {
  return (
    <>
      <TopNav>
        <CDCLogo />
        <div>Menu</div>
      </TopNav>

      <Canvas>
        <Container size={'0'} css={{fontFamily: theme.fonts.latRegStd}}>
          <Paragraph>
            i&apos;m a front-end develper and creative director currently living in charlotte, nc. enjoying the internet
            and open-source. the focus in the moment, is silencing the noise within design culture, with{' '}
            <span className='aware'>atlrdsgn®.</span>
          </Paragraph>
        </Container>
      </Canvas>
    </>
  )
}

const TopNav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',

  margin: 'auto',
  padding: '1rem',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100
})
