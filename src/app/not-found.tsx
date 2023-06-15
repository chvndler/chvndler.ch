import { Canvas } from '../components/shared';

export default function NotFound() {
  return (
    <Canvas>
      <section>
        <div className='container mx-auto flex items-center px-0 py-12'>
          <div>
            <p className='text-blue-500 dark:text-blue-400 text-sm font-medium'>
              404 error
            </p>
            <h1 className='text-gray-800 dark:text-white mt-3 text-2xl font-semibold md:text-3xl'>
              Page not found
            </h1>
            <p className='text-gray-500 dark:text-gray-400 mt-4'>
              Sorry, the page you are looking for doesn't exist.
            </p>

            <div className='mt-6 flex items-center gap-x-3'>
              <button className='text-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-blackA4 px-5 py-2 text-sm transition-colors duration-200 dark:bg-whiteA5 sm:w-auto'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-5 w-5 rtl:rotate-180'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                  />
                </svg>

                <span>Go back</span>
              </button>

              <button className='text-white bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600 w-1/2 shrink-0 rounded-lg px-5 py-2 text-sm tracking-wide transition-colors duration-200 sm:w-auto'>
                Take me home
              </button>
            </div>

            <div className='mt-10 space-y-6'>
              <div>
                <a
                  href='#'
                  className='text-blue-500 dark:text-blue-400 inline-flex items-center gap-x-2 text-sm hover:underline'
                >
                  <span>Documentation</span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='h-5 w-5 rtl:rotate-180'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                    />
                  </svg>
                </a>

                <p className='text-gray-500 dark:text-gray-400 mt-2 text-sm'>
                  Dive in to learn all about our product.
                </p>
              </div>

              <div>
                <a
                  href='#'
                  className='text-blue-500 dark:text-blue-400 inline-flex items-center gap-x-2 text-sm hover:underline'
                >
                  <span>Our blog</span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='h-5 w-5 rtl:rotate-180'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                    />
                  </svg>
                </a>

                <p className='text-gray-500 dark:text-gray-400 mt-2 text-sm'>
                  Read the latest posts on our blog.
                </p>
              </div>

              <div>
                <a
                  href='#'
                  className='text-blue-500 dark:text-blue-400 inline-flex items-center gap-x-2 text-sm hover:underline'
                >
                  <span>Chat to support</span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='h-5 w-5 rtl:rotate-180'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                    />
                  </svg>
                </a>

                <p className='text-gray-500 dark:text-gray-400 mt-2 text-sm'>
                  Our friendly team is here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Canvas>
  );
}
