'use client'

import {useEffect} from 'react'

export default function Error({error}: {error: Error; reset: () => void}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section className='bg-white dark:bg-gray-900 '>
      <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
        <div>
          <p className='text-sm font-medium text-blue-500 dark:text-blue-400'>
            404 error
          </p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            Page not found
          </h1>
          <p className='mt-4 text-gray-500 dark:text-gray-400'>
            Sorry, the page you are looking for doesn't exist.
          </p>

          <div className='flex items-center mt-6 gap-x-3'>
            <button className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:rotate-180'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>

              <span>Go back</span>
            </button>

            <button className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600'>
              Take me home
            </button>
          </div>

          <div className='mt-10 space-y-6'>
            <div>
              <a
                href='#'
                className='inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline'
              >
                <span>Documentation</span>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 rtl:rotate-180'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </a>

              <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                Dive in to learn all about our product.
              </p>
            </div>

            <div>
              <a
                href='#'
                className='inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline'
              >
                <span>Our blog</span>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 rtl:rotate-180'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </a>

              <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                Read the latest posts on our blog.
              </p>
            </div>

            <div>
              <a
                href='#'
                className='inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline'
              >
                <span>Chat to support</span>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 rtl:rotate-180'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </a>

              <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                Our friendly team is here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
