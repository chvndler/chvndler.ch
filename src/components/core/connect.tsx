import Link from 'next/link';

// server

const link = {
  twitter: 'https://twitter.com/chvndlerch',
  github: 'https://github.com/chvndler',
} as const;

export const Connect = () => (
  <div className="my-8 flex flex-grow flex-wrap justify-start text-left md:mt-0">
    <div className="w-full space-y-4 text-cdsbx-400 md:w-1/2">
      <p className="mb-2 font-inter text-[18px] font-semibold text-cdsbx-600">Connect.</p>
      <nav className="mb-10 list-none underline-offset-4">
        {connects.map((connect) => (
          <>
            <li key={connect.title}>
              <Link
                href={connect.url}
                target={connect.target}
                className="text-sm font-medium capitalize tracking-tight"
              >
                {connect.title}
              </Link>
            </li>
          </>
        ))}
      </nav>
    </div>

    <div className="w-full space-y-4 md:w-1/2">
      <p className="mb-2 font-inter text-[18px] font-semibold text-cdsbx-600">Misc.</p>
      <nav className="mb-10 list-none">
        {profile.map((source) => (
          <>
            <li key={source.key}>
              <Link
                href={source.url}
                target={source.target}
                className="text-sm font-medium capitalize tracking-tight"
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
    title: 'Twitter',
    url: 'https://twitter.com/chvndlerch',
    target: '_blank',
  },
  {
    title: 'GitHub',
    url: '/github',
    target: '_blank',
  },
  {
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
