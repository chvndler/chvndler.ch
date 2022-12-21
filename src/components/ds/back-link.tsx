import {useRouter} from 'next/router'
import * as React from 'react'
import {styled} from 'stitches.config'

type RouterProps = {
  children: React.ReactNode
}

export const BackLink = ({children, ...props}: RouterProps) => {
  const router = useRouter()

  return (
    <StyledLink {...props} onClick={() => router.back()}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled('a', {
  all: 'unset',
  color: 'inherit',
  '&:hover': {
    cursor: 'pointer'
  }
})
