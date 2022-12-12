import {useEffect, useState} from 'react'

import {Button} from '@/components/ds'

export const ShortcutError = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return (
        <Button as="a" href="/">
          Tap to go home →
        </Button>
      )
    }

    return (
      <Button as="a" href="/">
        Press <kbd>G</kbd> <kbd>H</kbd> to go home →
      </Button>
    )
  }

  return <div />
}
