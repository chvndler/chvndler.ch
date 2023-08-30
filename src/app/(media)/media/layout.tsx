import React from 'react';
import { PageLine } from '@/components/shared/faders';

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageLine
        direction='vertical'
        style={{
          opacity: 0.3,
          position: 'fixed',
          height: '90vh',
          top: 0,
          left: 'calc(50% - 320px)',
        }}
      />
      <div className='mx-auto flex h-full min-h-main w-full max-w-[800px] flex-col gap-[6px] px-[4px] pt-[80px] md:flex-row'>
        {children}
      </div>
    </>
  );
}
