import { AppController } from '@/components/layout';

import type { Metadata } from 'next/types';
import { content } from '@/lib/website.config';
import { connects } from '@/lib/data/connect';
import { details } from '@/lib/data/details.json';
import { ProjectHighlights, Section } from '@/components/core';
import { allProjects } from '@/contentlayer/generated';

export const metadata: Metadata = {
  title: 'dev.chandler.',
  description: 'Projects I have worked on, and am currently working on.',
};

export default function DevIndex() {
  const copy = content.projects;

  return (
    <>
      <AppController>
        <Section>
          {/* <!-- Connect --> */}
          <div className='font-sohne text-sm'>
            <p className='pb-4 text-[16px] font-[500] leading-6 text-carbon-700 dark:text-carbon-50'>
              Connect
            </p>
            <div className='mt-3 grid gap-6'>
              {connects.map((template) => (
                <>
                  <div className='grid grid-cols-1 items-start text-carbon-500 md:grid-cols-3'>
                    <div>
                      <p className='font-sohne text-[15px] font-[500] text-carbon-400 dark:text-carbon-400'>
                        {template.type}
                      </p>
                    </div>
                    <div className='w-full md:col-span-2'>
                      <p className='text-black dark:text-white'>
                        <a
                          href={template.link}
                          title={template.type}
                          className='font-sohne text-[15px] font-[400] underline underline-offset-2 transition-all duration-200 hover:no-underline'>
                          {template.title}
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* <!-- Projects --> */}
          <div className='font-sohne text-sm'>
            <p className='pb-4 text-[16px] font-[500] leading-6 text-carbon-700 dark:text-carbon-50'>
              Projects
            </p>
            <div className='mt-3 grid gap-6'>
              {details.map((template) => (
                <>
                  <div className='grid grid-cols-1 items-start text-carbon-500 md:grid-cols-3'>
                    <div>
                      <p className='font-mono text-xs font-semibold text-carbon-500 dark:text-carbon-600'>
                        {template.date}
                      </p>
                    </div>
                    <div className='w-full md:col-span-2'>
                      <p className='text-[14px] font-[600] text-carbon-600 dark:text-carbon-400'>
                        <a
                          href={template.link}
                          className='leading-6 transition-all duration-200 hover:underline md:leading-4'>
                          {template.title}
                        </a>
                      </p>
                      <p className='text-[14px] font-[400] text-carbon-400 dark:text-carbon-400'>
                        {template.location}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* <!-- End --> */}

          <ProjectHighlights projects={...allProjects.slice(0, 4)} />
        </Section>
      </AppController>
    </>
  );
}
