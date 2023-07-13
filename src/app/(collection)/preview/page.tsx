import { AppController } from '@/components/layout';
import type { Metadata } from 'next';
import { TestSection } from '@/components/core';
import { MobileMenu } from '@/components/primitives/drop.menu';

export const metadata: Metadata = {
  title: 'dev.chandler.',
  description: 'Projects I have worked on, and am currently working on.',
};

export default function PreviewIndex() {
  return (
    <>
      <AppController>
        <TestSection>
          <span className='mx-auto w-fit whitespace-nowrap rounded-full bg-graphicGreen px-2.5 py-0.5'>
            <p className='text-center font-sohne text-[14px] font-semibold text-carbon-900'>
              Preview Suite
            </p>
          </span>
          <MobileMenu />
        </TestSection>
      </AppController>
    </>
  );
}
