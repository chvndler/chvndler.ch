import Image from 'next/image';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';

const Space = () => <div style={{ height: '1rem' }} />;
const Code = (props: any) => <pre className='pre code language=*' {...props} />;

interface MDXProps {
  code: string;
}

const components = {
  Code,
  Image,
  Link,
  Space,
} as const;

export const MDX = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
