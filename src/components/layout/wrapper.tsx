import React from 'react'

export const AppWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <section className='flex-1 px-3 py-4'>
        <div className='container mx-auto w-full max-w-[620px] items-center'>{children}</div>
      </section>
    </div>
  )
}
