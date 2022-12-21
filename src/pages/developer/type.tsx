/** @format */

import {styled, theme} from 'stitches.config'

import {Container, Space} from '@/components/ds'
import {PageLayout} from '@/components/layout/page'

const TypePage = () => {
  return (
    <div>
      <PageLayout page_type={'RemoveFooter'}>
        <Container size={'2'}>
          <Mono bold>Bold</Mono>
          <Mono semi>SemiBold</Mono>
          <Mono medium>Medium</Mono>
          <Mono retina>Retina</Mono>
        </Container>

        <Space size={'2'} />

        <Container size={'2'}>
          <PangramSansRounded bold>Bold</PangramSansRounded>
          <PangramSansRounded semi>SemiBold</PangramSansRounded>
          <PangramSansRounded medium>Medium</PangramSansRounded>
          <PangramSansRounded regular>Regular</PangramSansRounded>
        </Container>

        <Space size={'2'} />

        <Container size={'2'}>
          <HelveticaRounded bold>Helvetica Rounded Bold</HelveticaRounded>
        </Container>

        <Space size={'2'} />

        <Container size={'2'}>
          <Scto bold>Scto Grotesk Bold</Scto>
          <Scto>Scto Grotesk</Scto>
        </Container>

        <Space size={'2'} />

        <Container size={'2'}>
          <System>System Font</System>
          <Inter>Inter</Inter>
        </Container>
      </PageLayout>
    </div>
  )
}

export default TypePage

const Mono = styled('p', {
  fontSize: 14,
  fontFamily: 'inherit',
  variants: {
    retina: {
      true: {
        fontFamily: theme.fonts.mono
      }
    },
    medium: {
      true: {
        fontFamily: theme.fonts.monoMedium
      }
    },
    semi: {
      true: {
        fontFamily: theme.fonts.monoSemibold
      }
    },
    bold: {
      true: {
        fontFamily: theme.fonts.monoBold
      }
    }
  }
})

const PangramSansRounded = styled('p', {
  fontSize: 18,
  fontFamily: 'inherit',
  variants: {
    bold: {
      true: {
        fontFamily: theme.fonts.panB
      }
    },
    semi: {
      true: {
        fontFamily: theme.fonts.panSb
      }
    },
    medium: {
      true: {
        fontFamily: theme.fonts.panMd
      }
    },
    regular: {
      true: {
        fontFamily: theme.fonts.panRg
      }
    }
  }
})

const HelveticaRounded = styled('p', {
  fontSize: 18,
  fontFamily: 'inherit',
  variants: {
    bold: {
      true: {
        fontFamily: theme.fonts.helvRound
      }
    }
  }
})

const Scto = styled('p', {
  fontSize: 18,
  fontFamily: theme.fonts.scto,
  variants: {
    bold: {
      true: {
        fontFamily: theme.fonts.sctoBold
      }
    }
  }
})

const Inter = styled('p', {
  fontSize: 18,
  fontFamily: theme.fonts.inter
})

const System = styled('p', {
  fontSize: 18,
  fontFamily: theme.fonts.system
})
