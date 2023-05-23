import Link from 'next/link'
import {ComponentSection} from '../core'

// server

const altrdsgn = 'https://www.altrdsgn.com'

export const Introduction = () => (
  <ComponentSection>
    <h3 className='mb-2 text-2xl font-bold tracking-tighter uppercase font-roboflex text-zinc8'>
      Chandler Chappell
    </h3>
    <p className='max-w-md font-medium text-md text-grayscale-800 font-inter dark:text-grayscale-400'>
      Creating cool and taking notes. Enjoying the internet and open-source, the
      focus in the moment is silencing the noise within design culture, with{' '}
      <Link
        href={altrdsgn}
        target='_blank'
        className='font-semibold text-hypergrape-700 hover:text-hypergrape-600'
      >
        atlrdsgn™
      </Link>
      .
    </p>
  </ComponentSection>
)
