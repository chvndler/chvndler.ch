import Link from 'next/link'

// server

const link = {
  react: 'https://reactjs.org/',
  next: 'https://nextjs.org/',
  typescript: 'https://www.typescriptlang.org/',
  figma: 'https://www.figma.com/',
}

export const TechStack = () => {
  return (
    <section className='mv5'>
      <h3 className='f5 fw4 mb1 zorba track-n-02'>Software and Tools</h3>
      <ul className='list pv2'>
        <li className='dib mr3'>
          <Link
            href={link.react}
            target={'_blank'}
            className='f6 f5-ns b db pv2 link dim mid-gray'
          >
            React
          </Link>
        </li>
        <li className='dib mr3'>
          <Link
            href={link.next}
            target={'_blank'}
            className='f6 f5-ns b db pv2 link dim mid-gray'
          >
            Next.js
          </Link>
        </li>
      </ul>
    </section>
  )
}
