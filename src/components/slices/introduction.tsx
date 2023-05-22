import Link from 'next/link'
import {ComponentSection} from '../core'

// server

const altrdsgn = 'https://www.altrdsgn.com'

export const Introduction = () => (
  <ComponentSection>
    <h3 className='f3 fw8 mb1 gravel tracked-n-02 inter'>Chandler Chappell</h3>
    <p className='f-16 db pt1 fw4 lh-copy measure gray aspekta'>
      Creating cool and taking notes. Enjoying the internet and open-source, the
      focus in the moment is silencing the noise within design culture, with{' '}
      <Link href={altrdsgn} target='_blank' className='link dim gray fw5'>
        atlrdsgn
      </Link>
      .
    </p>
  </ComponentSection>
)
