/** @format */

import {css, styled, theme} from 'stitches.config'

import {Flex} from '@/components/ds'
import {Icxn} from '@/components/icons/atlr-icxns'
import {R3FCanvasLayout} from '@/components/layout/r3f-canvas-layout'
import {R3FFooter} from '@/components/layout/r3f-canvas-layout/R3Footer'
import {CDCDevScene} from '@/components/primitives/three/Scenes'

const ThreePage = () => {
 return (
  <>
   <Instructions>
    <ThreeInstructions />
   </Instructions>
   <R3FFooter />
   <R3FCanvasLayout>
    <CDCDevScene />
   </R3FCanvasLayout>
  </>
 )
}

export default ThreePage

// Styles..
const StyledInstructions = css({
 zIndex: 3,
 color: theme.colors.chxn10,
 boxSizing: 'border-box',
 width: '100vw',
 position: 'fixed',
 display: 'flex',
 top: 80,
 left: 0,
 right: 0,
 alignItems: 'center',
 margin: 'auto',
 justifyContent: 'center',
 userSelect: 'none'
})

const StyledInstructionText = css({
 color: theme.colors.chxn4,
 textAlign: 'center',
 fontSize: 12.5,
 fontFamily: theme.fonts.panSb,
 mixBlendMode: 'difference',
 lineHeight: '1.5',
 userSelect: 'none'
})

const Instructions = styled('div', StyledInstructions)
const InstructionText = styled('span', StyledInstructionText)

const ThreeInstructions = () => {
 return (
  <Flex
   css={{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
   }}>
   <Icxn variant={'AirMouse'} />
   <InstructionText>Drag + Scroll to Explore</InstructionText>
  </Flex>
 )
}
