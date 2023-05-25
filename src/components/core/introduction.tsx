import React from 'react'
import Link from 'next/link'

// server

const altrdsgn = 'https://www.altrdsgn.com'

export const Introduction = () => (
  <ComponentSection>
    <h3 className='mb-2 text-2xl font-[800] tracking-tight uppercase md:text-2xl font-fraktion text-grayscale-900 dark:text-grayscale-500'>
      Chandler Chappell
    </h3>

    <p className='max-w-md text-[18px] lg:text-[16px] font-[450] tracking-tight leading-6 lg:leading-5 font-fraktion text-grayscale-700 dark:text-grayscale-600'>
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
  return <section className='py-6'>{children}</section>
}
