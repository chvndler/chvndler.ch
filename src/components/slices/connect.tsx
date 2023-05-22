import Link from 'next/link'
import {ComponentSection} from '../core'

// server

const link = {
  twitter: 'https://twitter.com/chvndlerch',
  github: 'https://github.com/chvndler',
} as const

export const Connect = () => (
  <ComponentSection>
    <div className='dt w-100 baseline f-row tween mv5 flex'>
      <h3 className='f4 fw4 mb1 zorba track-n-03 font-inter'>Connect</h3>
      <div className='f-inline baseline gap-03 flex'>
        <Link href={link.twitter} target='_blank'>
          <p className='link f5 fw6 gravel dim'>Twitter</p>
        </Link>
        <Link href={link.github} target='_blank'>
          <p className='link f5 fw6 gravel dim'>GitHub</p>
        </Link>
      </div>
    </div>
  </ComponentSection>
)
