import Link from 'next/link';
import Tooltip from '../shared/tooltip';

// server

export const Connect = () => (
  <section id='connect-sect' className='py-6'>
    <div className='flex flex-grow flex-wrap justify-start gap-y-6 py-6 text-left md:mt-0'>
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
                      className='text-md md:text-md font-ibmSans font-medium lowercase text-carbon-400 hover:text-carbon-500 dark:text-carbon-500 dark:hover:text-carbon-600'
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
                  className='text-md md:text-md font-ibmSans font-medium lowercase text-carbon-400 hover:text-carbon-500 dark:text-carbon-500 dark:hover:text-carbon-600'
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
    key: 'figma',
    title: 'Figma',
    url: 'https://www.figma.com/@chvndler',
    target: '_blank',
    tip: 'Figma',
  },
  {
    key: 'resume',
    title: 'Read.cv',
    url: 'https://read.cv/chvndler',
    target: '_blank',
  },
];

const profile = [
  {
    key: 'design',
    title: 'Design',
    url: 'https://www.are.na/chvndler-ch/design-su-ybzvundw',
    target: '_blank',
  },
  {
    key: 'archive',
    title: 'Archive Gallery',
    url: '/archive',
    target: '_self',
  },
  {
    key: 'media',
    title: 'Film Projects',
    url: '/media',
    target: '_self',
  },
];
