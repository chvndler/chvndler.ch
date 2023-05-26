import Link from 'next/link';

// server

const link = {
  twitter: 'https://twitter.com/chvndlerch',
  github: 'https://github.com/chvndler',
} as const;

export const Connect = () => (
  <div className="flex flex-wrap justify-start flex-grow py-6 text-left md:mt-0">
    <div className="w-full space-y-4 md:w-1/2">
      <p className="mb-2 text-[18px] font-semibold text-cdsbx-600">Connect.</p>
      <nav className="mb-10 list-none text-grayA10 underline-offset-4">
        {connects.map((connect) => (
          <>
            <li key={connect.key}>
              <Link
                key={connect.key}
                href={connect.url}
                target={connect.target}
                className="text-sm font-medium lowercase font-archivo text-grayA10 hover:text-grayA11 dark:text-whiteA10 dark:hover:text-whiteA11"
              >
                {connect.title}
              </Link>
            </li>
          </>
        ))}
      </nav>
    </div>

    <div className="w-full space-y-4 md:w-1/2">
      <p className="mb-2 text-[18px] font-semibold text-cdsbx-600">Misc.</p>
      <nav className="mb-10 list-none text-grayA10 underline-offset-4">
        {profile.map((source) => (
          <>
            <li key={source.key}>
              <Link
                href={source.url}
                target={source.target}
                className="text-sm font-medium lowercase font-archivo text-grayA10 hover:text-grayA11 dark:text-whiteA10 dark:hover:text-whiteA11"
              >
                {source.title}
              </Link>
            </li>
          </>
        ))}
      </nav>
    </div>
  </div>
);

const connects = [
  {
    key: 'twitter',
    title: 'Twitter',
    url: 'https://twitter.com/chvndlerch',
    target: '_blank',
  },
  {
    key: 'github',
    title: 'GitHub',
    url: '/github',
    target: '_blank',
  },
  {
    key: 'resume',
    title: 'Resume / cv',
    url: '/',
    target: '_blank',
  },
];

const profile = [
  {
    key: 'web',
    title: 'Web Projects',
    url: '/projects',
    target: '_blank',
  },
  {
    key: 'film',
    title: 'Film Projects',
    url: '/media',
    target: '_blank',
  },
];
