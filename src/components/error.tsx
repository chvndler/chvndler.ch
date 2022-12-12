import {Box} from '@/components/ds'

import {ShortcutError} from './shortcut-error'

type ErrorProps = {
  code: number
}

export const ErrorMessage = ({code}: ErrorProps) => {
  let title = 'five hundred'
  let description = "Something isn't right."

  if (code === 404) {
    title = 'four oh four'
    description = "This page doesn't exist."
  }

  return (
    <Box css={{textAlign: 'center'}}>
      <h1>{title}</h1>
      <ShortcutError />
      <p>{description}</p>
    </Box>
  )
}

export type ErrorMessageProps = ErrorProps
