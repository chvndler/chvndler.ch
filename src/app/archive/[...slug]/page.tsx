import { notFound } from 'next/navigation';
import { AppController } from '@/components/layout';
import { allComponents } from '@/lib/components';

import type { Metadata } from 'next';

interface PrimitiveXProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PrimitiveXProps['params']) {
  const slug = params?.slug?.join('/');
  const comp = allComponents.find((comp) => comp.slugAsParams === slug);
  if (!comp) {
    null;
  }
  return comp;
}

export async function generateStaticParams(): Promise<PrimitiveXProps['params'][]> {
  return allComponents.map((compo) => ({
    slug: compo.slugAsParams.split('/'),
  }));
}

export async function generateMetadata({ params }: PrimitiveXProps): Promise<Metadata> {
  const prime = await getPostFromParams(params);

  if (!prime) {
    return {};
  }

  return {
    title: prime.title,
    description: prime.excerpt,
  };
}

export default async function ViewPrimitivePage({ params }: PrimitiveXProps) {
  const x = await getPostFromParams(params);
  if (!x) {
    notFound();
  }

  return (
    <AppController>
      <h2 className='leading-4 tracking-tight font-ibmSans text-carbon-800 dark:text-carbon-100'>
        {x.title}
      </h2>
      <p className='leading-4 tracking-tight font-ibmMono text-carbon-600 dark:text-carbon-300'>
        {x.excerpt}
      </p>

      <div className='mt-4'>{x.component}</div>
    </AppController>
  );
}
