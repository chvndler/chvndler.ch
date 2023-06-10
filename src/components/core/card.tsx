import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import Balancer from 'react-wrap-balancer';

import type { Projects } from '.contentlayer/generated/types';
import { formatDateTime } from '../../lib/hooks/use-date-time';
import { cn } from '../../lib/utils';

export default function Card({
  title,
  description,
  demo,
  large,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`border-gray-200 bg-white relative col-span-1 h-96 overflow-hidden rounded-xl border shadow-md ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      <div className='flex h-60 items-center justify-center'>{demo}</div>
      <div className='mx-auto max-w-md text-center'>
        <h2 className='from-black to-stone-500 font-display bg-gradient-to-br bg-clip-text text-xl font-bold text-transparent md:text-3xl md:font-normal'>
          <Balancer>{title}</Balancer>
        </h2>
        <div className='text-gray-500 prose-sm -mt-2 leading-normal md:prose'>
          <Balancer>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    {...props}
                    className='text-gray-800 font-medium underline transition-colors'
                  />
                ),
                code: ({ node, ...props }) => (
                  <code
                    {...props}
                    // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                    inline='true'
                    className='bg-gray-100 text-gray-800 rounded-sm px-1 py-0.5 font-mono font-medium'
                  />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </Balancer>
        </div>
      </div>
    </div>
  );
}

export const ProjectCard = ({ project }: { project: Projects }) => {
  return (
    <>
      <article>
        <a
          className={cn('project-card ml-n16 flex flex-col gap-8 rounded-lg p-16')}
          href={project.url}
        >
          <p>{project.title}</p>
          <p>{project.description}</p>
        </a>
      </article>
    </>
  );
};
