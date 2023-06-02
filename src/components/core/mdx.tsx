import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';

const Space = () => <div style={{ height: '1rem' }} />;
const Code = (props: any) => <pre className='pre code language=*' {...props} />;

type MDX = {
  Link: typeof Link;
} & MDXComponents;

type MDXProps = {
  code: string;
};

const components: MDX = {
  Link,
  Space,
};

export const MDX = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
