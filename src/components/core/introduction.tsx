import React from 'react';
import Link from 'next/link';

// server

const altrdsgn = 'https://www.altrdsgn.com';

export const Introduction = () => (
  <div className="flex flex-col items-center py-6 mx-auto">
    <div className="flex flex-col w-full mx-auto text-left prose-blue">
      <div className="w-full mx-auto">
        <h3 className="font-archivo text-[22px] font-bold leading-10 text-blackA11 dark:text-whiteA10">
          Chandler.
        </h3>
        <p className="max-w-lg font-medium leading-6 text-md font-archivo text-blackA10 dark:text-whiteA11">
          Creating cool and taking notes. Enjoying the internet and open-source, the focus in the
          moment is silencing the noise within design culture, with{' '}
          <Link
            href={altrdsgn}
            target="_blank"
            className="font-semibold text-B500 hover:opacity-80 dark:text-B600 dark:hover:opacity-80"
          >
            atlrdsgn
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
);
