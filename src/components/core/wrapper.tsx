import React from 'react'

export const AppWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <section className='px-3 mx-0 my-20'>
        <div className='container items-center w-full max-w-xl p-0 mx-auto'>
          {children}
        </div>
      </section>
    </>
  )
}
