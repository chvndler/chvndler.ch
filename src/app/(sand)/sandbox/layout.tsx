import React from 'react';
import { VerticalFade, PageLine } from '@/components/shared/faders';

export default function SandboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VerticalFade
        side='top'
        style={{
          height: 100,
        }}
      />
      <PageLine
        direction='vertical'
        style={{
          position: 'fixed',
          height: '100vh',
          top: 0,
          left: 'calc(50% - 320px)',
        }}
      />
      <div className='mx-auto flex h-full min-h-main w-full max-w-[620px] flex-col gap-[6px] px-[4px] pt-[80px] md:flex-row'>
        {children}
      </div>
    </>
  );
}
