import Link from 'next/link';
import Tooltip from '@/components/primitives/tooltip';

// server

export const Connect = () => (
  <section id='connect-sect' className='py-6'>
    {/* <!-- <div className='flex flex-wrap justify-start flex-grow py-6 text-left gap-y-6 md:mt-0'> --> */}

    <div className='grid grid-cols-1 justify-start gap-y-6 py-6 text-left md:grid-cols-3'>
      <div className='h-auto w-full gap-y-3'>
        <p className='pb-3 font-sohne text-[16px] font-[600] text-carbon-700 dark:text-carbon-300'>
          Connect
        </p>
        <nav className='mb-4 list-none text-grayA10 underline-offset-4'>
          {connects.map((connect, k) => (
            <>
              <li key={k}>
                <Tooltip content={connect.tip}>
                  <Link
                    key={k}
                    href={connect.url}
                    target={connect.target}
                    className='md:text-md font-sohne text-[13px] font-[500] text-carbon-400 hover:text-carbon-500 dark:text-carbon-500 dark:hover:text-carbon-600 md:text-[14px]'>
                    {connect.title}
                  </Link>
                </Tooltip>
              </li>
            </>
          ))}
        </nav>
      </div>

      <div className='h-auto w-full gap-y-3'>
        <p className='pb-3 font-sohne text-[16px] font-[600] text-carbon-700 dark:text-carbon-300'>
          Gallery
        </p>
        <nav className='mb-2 list-none text-grayA10 underline-offset-4'>
          {profile.map((source, i) => (
            <>
              <li key={i}>
                <Link
                  key={i}
                  href={source.url}
                  target={source.target}
                  className='md:text-md font-sohne text-[13px]  font-[500] text-carbon-400 hover:text-carbon-500 dark:text-carbon-500 dark:hover:text-carbon-600 md:text-[14px]'>
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

export const ConnectAlternateView = () => (
  <section id='connect-sect' className='py-6'>
    <div className='py-6 text-left'>
      <div className='h-auto w-full gap-y-3'>
        <p className='pb-3 font-sohne text-[18px] font-[600] text-carbon-700 dark:text-carbon-300'>
          Connect
        </p>
        <nav className='mb-4 list-none text-grayA10 underline-offset-4'>
          {connects.map((connect, k) => (
            <>
              <li key={k}>
                <div className='flex w-full flex-row items-center justify-start gap-x-4 gap-y-2 my-2'>
                  <div
                    key={k}
                    id='label'
                    className='user-select-none w-1/3 font-sohne text-[15px] font-[500] text-carbon-400 dark:text-carbon-600 md:text-[16px]'>
                    {connect.title}
                  </div>
                  <Link
                    key={k}
                    href={connect.url}
                    target={connect.target}
                    className='font-sohne text-[15px] font-[400] tracking-tight text-carbon-500 hover:text-carbon-600 hover:underline hover:underline-offset-1 dark:text-carbon-50 dark:hover:text-carbon-600 md:text-[16px]'>
                    {connect.handle}
                  </Link>
                </div>
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
    handle: '@chvndlerch',
    url: 'https://twitter.com/chvndlerch',
    target: '_blank',
    tip: 'Twitter', // TODO: style some content here.
  },
  {
    key: 'github',
    title: 'GitHub',
    handle: '@chvndler',
    url: 'https://github.com/chvndler',
    target: '_blank',
    tip: 'GitHub',
  },
  {
    key: 'figma',
    title: 'Figma',
    handle: '@chvndler',
    url: 'https://www.figma.com/@chvndler',
    target: '_blank',
    tip: 'Figma',
  },
  {
    key: 'resume',
    title: 'Read.cv',
    handle: '@chvndler',
    url: 'https://read.cv/chvndler',
    target: '_blank',
  },
    {
    key: 'are.na',
    title: 'Are.na',
    handle: '@chvndler-ch',
    url: 'https://www.are.na/chvndler-ch',
    target: '_blank',
  },
];

const profile = [
  {
    key: 'design',
    title: 'Design',
    url: 'https://www.are.na/chvndler-ch/dsgn-ioqy1my0luw',
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
