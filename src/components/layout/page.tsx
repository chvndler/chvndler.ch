import React from 'react';

const Page = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className='container mx-auto w-full items-center px-0 py-8'>
      {children}
    </div>
  </>
);

const Component = ({ children }: { children: React.ReactNode }) => {
  return <section className='py-6'>{children}</section>;
};

export {
  //..
  Page as PageSection,
  Component as ComponentSection,
};
