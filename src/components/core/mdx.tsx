import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';

const Space = () => <div style={{ height: '1rem' }} />;
const Code = (props: any) => <pre className='pre code language=*' {...props} />;

type MDX = {
  code: string;
};

const components: MDXComponents = {
  Link,
  Space,
};

export const MDX = ({ code }: MDX) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
