import Link from 'next/link'

// server

const altrdsgn = 'https://www.altrdsgn.com'

export const Introduction = () => (
  <section>
    <h3 className='f3 fw8 mb1 gravel tracked-n02 instrument'>
      Chandler Chappell
    </h3>
    <p className='f-16 db pt1 fw4 lh-copy measure gray instrument'>
      Creating cool and taking notes. Enjoying the internet and open-source, the
      focus in the moment is silencing the noise within design culture, with{' '}
      <Link href={altrdsgn} target='_blank' className='link dim gray fw5'>
        atlrdsgn
      </Link>
      ®.
    </p>
  </section>
)
