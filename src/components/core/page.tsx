import React from 'react'

const PAGE_SECTION = ({children}: {children: React.ReactNode}) => (
  <>
    <div className='container items-center w-full px-0 py-8 mx-auto'>
      {children}
    </div>
  </>
)

export {
  //..
  PAGE_SECTION as PageSection,
}
