import {Text} from '@/components/ds'

import {HeroSection} from '../hero'

export const PageHero = () => {
  return (
    <>
      <HeroSection size={'2'}>
        <Text
          css={{
            textAlign: 'center',
            fontSize: 22,
            fontFamily: `"Lateral Standard Bold", sans-serif`,
          }}>
          PROJECTS©
        </Text>
      </HeroSection>
    </>
  )
}
