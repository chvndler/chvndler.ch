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

export const AlternateIntroduction = () => (
  <div className='flex flex-col items-center py-8 mx-auto'>
    <div className='flex flex-col w-full mx-auto prose text-left prose-blue'>
      <div className='w-full mx-auto'>
        <h3 className='font-inter text-[22px] font-[800] leading-5 text-cdsbx-600'>Chandler.</h3>

        <p className='max-w-lg font-medium leading-6 text-md font-inter text-cdsbx-400 dark:text-grayscale-600'>
          Creating cool and taking notes. Enjoying the internet and open-source, the focus in the
          moment is silencing the noise within design culture, with{' '}
          <Link
            href={altrdsgn}
            target='_blank'
            className='font-semibold text-hypergrape-700 hover:text-hypergrape-600'
          >
            atlrdsgn
          </Link>
          ®.
        </p>

        <div className='flex flex-wrap justify-start flex-grow mt-8 text-left md:mt-0'>
          <div className='w-full space-y-4 text-cdsbx-400 md:w-1/2'>
            <p className='mb-2 font-inter text-[18px] font-semibold text-cdsbx-600'>Connect.</p>
            <nav className='mb-10 list-none underline-offset-4'>
              <li>
                <Link
                  href='#'
                  className='font-normal tracking-tight capitalize text-md text-grayscale-800'
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='font-normal tracking-tight capitalize text-md text-grayscale-800'
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='font-normal tracking-tight capitalize text-md text-grayscale-800'
                >
                  Cv / Resume ⌝
                </Link>
              </li>
            </nav>
          </div>

          <div className='w-full space-y-4 md:w-1/2'>
            <p className='mb-2 font-inter text-[18px] font-semibold text-cdsbx-600'>Misc.</p>
            <nav className='mb-10 list-none'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href=' #'>About</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
)
