import React from 'react';
import { VerticalFade, PageLine } from '@/components/shared/faders';
import { BodyFader } from '@/components/layout';

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
      {/*
      <PageLine
        direction='vertical'
        style={{
          position: 'fixed',
          height: '100vh',
          top: 0,
          left: 'calc(50% - 320px)',
        }}
      />
      */}

      <BodyFader />
      <div className='mx-auto flex h-full min-h-main w-full flex-col px-[4px] pt-[80px]'>
        {children}
      </div>
    </>
  );
}
