import Link from 'next/link';
import Tooltip from '../shared/tooltip';

// server

export const Connect = () => (
  <section id='connect-sect' className='py-6'>
    <div className='flex flex-grow flex-wrap justify-start gap-y-6 py-6 text-left md:mt-0'>
      <div className='w-full space-y-4 md:w-1/2'>
        <p className='mb-2 text-[18px] font-semibold text-grey-600 dark:text-grey-400'>Connect.</p>
        <nav className='mb-10 list-none text-grayA10 underline-offset-4'>
          {connects.map((connect) => (
            <>
              <li key={connect.key}>
                <Tooltip content={connect.tip}>
                  <>
                    <Link
                      key={connect.key}
                      href={connect.url}
                      target={connect.target}
                      className='text-md font-archivo font-semibold lowercase text-grey-400 hover:text-grey-500 dark:text-grey-500 dark:hover:text-grey-600 md:text-sm'
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
        <p className='mb-2 text-[18px] font-semibold text-grey-600 dark:text-grey-400'>Other.</p>
        <nav className='mb-10 list-none text-grayA10 underline-offset-4'>
          {profile.map((source) => (
            <>
              <li key={source.key}>
                <Link
                  href={source.url}
                  target={source.target}
                  className='text-md font-archivo font-semibold lowercase text-grey-400 hover:text-grey-500 dark:text-grey-500 dark:hover:text-grey-600 md:text-sm'
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
    title: 'Resume / cv',
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
