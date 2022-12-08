import {usePlausible} from 'next-plausible'
import React from 'react'

type PlausibleProps = {
  onClick?: Event
  children?: React.ReactNode
  event_name?: string
}

export const PlausibleEventButton = ({children}: PlausibleProps) => {
  const plausible = usePlausible()

  return <button onClick={() => plausible('event_name')}>{children}</button>
}
