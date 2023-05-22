import React from 'react'

export function CS({children}: {children: React.ReactNode}) {
  return (
    <main id='main' className='main'>
      <section className='mv5 ph3 core-section'>{children}</section>
    </main>
  )
}

export function SH({children}: {children: React.ReactNode}) {
  return <h3 className='f4 fw4 mb1 zorba track-n-03 font-inter'>{children}</h3>
}
