import React from 'react'
import Link from 'next/link'

// server

const altrdsgn = 'https://www.altrdsgn.com'

export const Introduction = () => (
  <ComponentSection>
    <h3 className='font-uncut text-[20px] font-[700] leading-8 text-cdsbx-600'>Chandler.</h3>

    <p className='max-w-md font-uncut text-[16px] font-medium leading-5 text-cdsbx-400 dark:text-grayscale-600 lg:text-[16px] lg:leading-5'>
      Creating cool and taking notes. Enjoying the internet and open-source, the focus in the moment
      is silencing the noise within design culture, with{' '}
      <Link
        href={altrdsgn}
        target='_blank'
        className='font-semibold text-hypergrape-700 hover:text-hypergrape-600'
      >
        atlrdsgn
      </Link>
      ®.
    </p>
  </ComponentSection>
)

function ComponentSection({children}: {children: React.ReactNode}) {
  return <section className='pb-8'>{children}</section>
}
