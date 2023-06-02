import Link from 'next/link';
import Tooltip from '../shared/tooltip';

// server

export const Connect = () => (
  <section id='connect-sect' className='py-6'>
    <div className='flex flex-wrap justify-start flex-grow py-6 text-left gap-y-6 md:mt-0'>
      <div className='w-full space-y-4 md:w-1/2'>
        <p className='mb-2 text-[18px] font-semibold text-carbon-700 dark:text-carbon-300'>
          Connect.
        </p>
        <nav className='mb-10 list-none text-grayA10 underline-offset-4'>
          {connects.map((connect, k) => (
            <>
              <li key={k}>
                <Tooltip content={connect.tip}>
                  <>
                    <Link
                      key={k}
                      href={connect.url}
                      target={connect.target}
                      className='font-semibold lowercase text-md font-archivo text-carbon-400 hover:text-carbon-500 dark:text-carbon-500 dark:hover:text-carbon-600 md:text-sm'
                    >
                      {connect.title}
                    </Link>
                  </>
                </Tooltip>
              </li>
            </>
          ))}
        </nav>
      </div>

      <div className='w-full space-y-4 md:w-1/2'>
        <p className='mb-2 text-[18px] font-semibold text-carbon-700 dark:text-carbon-300'>
          Other.
        </p>
        <nav className='mb-10 list-none text-grayA10 underline-offset-4'>
          {profile.map((source, i) => (
            <>
              <li key={i}>
                <Link
                  key={i}
                  href={source.url}
                  target={source.target}
                  className='font-semibold lowercase text-md font-archivo text-carbon-400 hover:text-carbon-500 dark:text-carbon-500 dark:hover:text-carbon-600 md:text-sm'
                >
                  {source.title}
                </Link>
              </li>
            </>
          ))}
        </nav>
      </div>
    </div>
  </section>
);

const connects = [
  {
    key: 'twitter',
    title: 'Twitter',
    url: 'https://twitter.com/chvndlerch',
    target: '_blank',
    tip: 'Twitter', // TODO: style some content here.
  },
  {
    key: 'github',
    title: 'GitHub',
    url: 'https://github.com/chvndler',
    target: '_blank',
    tip: 'GitHub',
  },
  {
    key: 'resume',
    title: 'Read.cv',
    url: 'https://read.cv/chvndler',
    target: '_blank',
    tip: 'Resume / cv',
  },
];

const profile = [
  {
    key: 'media',
    title: 'Film Projects',
    url: '/media',
    target: '_self',
  },
  {
    key: 'archive',
    title: 'Archive',
    url: '/archive',
    target: '_self',
  },
];
