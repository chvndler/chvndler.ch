import React from 'react'

export const AppWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <section className='px-3 m-0'>
        <div className='container items-center w-full max-w-xl p-0 mx-auto my-0'>{children}</div>
      </section>
    </>
  )
}
