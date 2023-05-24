import React from 'react'

// Container.
export function CS({children}: {children: React.ReactNode}) {
  return <section className='mv5 ph3'>{children}</section>
}

// ComponentSection.
export function COMP_SECT({children}: {children: React.ReactNode}) {
  return <section className='py-6'>{children}</section>
}
