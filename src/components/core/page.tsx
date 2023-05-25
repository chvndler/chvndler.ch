import React from 'react'

// PageSection.
const PAGE_SECTION = ({children}: {children: React.ReactNode}) => (
  <>
    <div className='container items-center w-full px-0 py-8 mx-auto'>{children}</div>
  </>
)

// ComponentSection.
const COMP_SECT = ({children}: {children: React.ReactNode}) => {
  return <section className='py-6'>{children}</section>
}

export {
  //..
  PAGE_SECTION as PageSection,
  COMP_SECT as ComponentSection,
}
