import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import Balancer from 'react-wrap-balancer';

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
                    className='bg-gray-100 font-mono text-gray-800 rounded-sm px-1 py-0.5 font-medium'
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
