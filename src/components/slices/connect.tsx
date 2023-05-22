import Link from 'next/link'

// server

const link = {
  twitter: 'https://twitter.com/chvndlerch',
  github: 'https://github.com/chvndler',
} as const

export const Connect = () => (
  <section className='mv5'>
    <div className='dt w-100 baseline f-row tween mv5 flex'>
      <h3 className='f5 fw4 mb1 zorba track-n-02'>Connect</h3>
      <div className='f-inline baseline gap-03 flex'>
        <Link href={link.twitter} target='_blank'>
          <p className='link f6 fw5 slate-gray dim'>Twitter</p>
        </Link>
        <Link href={link.github} target='_blank'>
          <p className='link f6 fw5 slate-gray dim'>GitHub</p>
        </Link>
      </div>
    </div>
  </section>
)
