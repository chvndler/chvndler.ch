import React from 'react';
import Link from 'next/link';

// server

const altrdsgn = 'https://www.altrdsgn.com';

export const Introduction = () => (
  <ComponentSection>
    <h3 className="font-uncut text-[20px] font-[700] leading-8 text-cdsbx-600">Chandler.</h3>

    <p className="font-uncut max-w-md text-[16px] font-medium leading-5 text-cdsbx-400 dark:text-grayscale-600 lg:text-[16px] lg:leading-5">
      Creating cool and taking notes. Enjoying the internet and open-source, the focus in the moment
      is silencing the noise within design culture, with{' '}
      <Link
        href={altrdsgn}
        target="_blank"
        className="font-semibold text-hypergrape-700 hover:text-hypergrape-600"
      >
        atlrdsgn
      </Link>
      ®.
    </p>
  </ComponentSection>
);

function ComponentSection({ children }: { children: React.ReactNode }) {
  return <section className="pb-8">{children}</section>;
}

export const AlternateIntroduction = () => (
  <div className="flex flex-col items-center py-6 mx-auto">
    <div className="flex flex-col w-full mx-auto prose text-left prose-blue">
      <div className="w-full mx-auto">
        <h3 className="text-[22px] font-bold leading-5 text-cdsbx-600">Chandler.</h3>

        <p className="max-w-lg font-medium leading-6 text-md font-archivo text-cdsbx-400 dark:text-grayscale-600">
          Creating cool and taking notes. Enjoying the internet and open-source, the focus in the
          moment is silencing the noise within design culture, with{' '}
          <Link
            href={altrdsgn}
            target="_blank"
            className="font-semibold text-hypergrape-700 hover:text-hypergrape-600"
          >
            atlrdsgn
          </Link>
          ®.
        </p>
      </div>
    </div>
  </div>
);
