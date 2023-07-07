import React from 'react';

// PageSection.
const Page = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className='container items-center w-full px-0 py-8 mx-auto'>
      {children}
    </div>
  </>
);

// ComponentSection.
const Component = ({ children }: { children: React.ReactNode }) => {
  return <section className='py-6'>{children}</section>;
};

export {
  //..
  Page as PageSection,
  Component as ComponentSection,
};
