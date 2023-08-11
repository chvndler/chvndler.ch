import React from 'react';

export default function SandboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-auto w-full flex-col gap-[6px] px-[6px] md:flex-row'>
      {children}
    </div>
  );
}
