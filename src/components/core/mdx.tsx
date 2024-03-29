import * as React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';
import type { MDXImageProps, MDXIFrameProps } from '@/lib/mdx';

function clsx(...args: any) {
  return args.filter(Boolean).join(' ');
}

/**
 *
 * build components.
 */

const IFrame = ({ src }: MDXIFrameProps) => {
  return (
    <section className='w-full'>
      <iframe
        src={src}
        allowFullScreen
        className='aspect-video w-full'
      />
    </section>
  );
};

const Image = (props: MDXImageProps) => <NextImage {...props} />;
const Space = (props: any) => (
  <div
    {...props}
    style={{ height: '1rem' }}
  />
);
const Code = ({ className, ...props }: { className: string }) => (
  <code
    {...props}
    className={clsx(
      'border-grey-A5 dark:border-grey-A7 relative rounded-md border bg-carbon-100 bg-opacity-25 px-[0.3rem] py-[0.2rem] font-mono text-sm text-carbon-700 dark:bg-carbon-900 dark:text-carbon-300',
      className,
    )}
  />
);

const Link = (props: any) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <NextLink
        href={href}
        {...props}>
        {props.children}
      </NextLink>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return (
    <a
      className={clsx(
        'mdx-link text-carbon-400 hover:text-carbon-600 dark:text-carbon-400',
      )}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    />
  );
};

const RoundImage = ({ className, ...props }: MDXImageProps) => {
  return (
    <NextImage
      className={clsx(
        'rounded-xl border border-blackA5 md:rounded-2xl',
        className,
      )}
      {...props}
    />
  );
};

/**
 *
 * render mdx.
 */
type MDXProps = { code: string };

const components: MDXComponents = {
  Link,
  Code,
  Space,
  IFrame,
  Image,
  RoundImage,
};

export const MDX = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
