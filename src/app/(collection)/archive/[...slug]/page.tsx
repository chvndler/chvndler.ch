import React from 'react';
import Link from 'next/link';
import RouterPrev from '@/components/shared/router.back';

import { notFound } from 'next/navigation';
import { AppController } from '@/components/layout';
import { allComponents } from '@/lib/components';
import { cn } from '@/lib/utils';

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
    return {
      title: '404',
      description: '404',
    };
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

  const compo = x.component;

  return (
    <AppController>
      <article key={x.title} className='text-md prose prose-neutral mb-20'>
        <div>
          <Link href=''>
            <RouterPrev />
          </Link>
        </div>

        <h3 className='font-archivo leading-4 tracking-tight text-carbon-800 dark:text-carbon-100'>
          {x.title}
        </h3>
        <p className='font-ibmSans text-sm leading-5 text-carbon-600 dark:text-carbon-300'>
          {x.excerpt}
        </p>
      </article>
      <>
        <PrimitiveWrapper>
          <Component key={x.slug} path={x.url} component={compo} />
        </PrimitiveWrapper>
      </>
    </AppController>
  );
}

function PrimitiveWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        id='primitive-x'
        className='mx-auto w-full rounded-md bg-carbon-50 px-4 py-14 shadow-sminner dark:bg-carbon-900 md:px-[92px]'
      >
        <div className={cn('primitive_inner px-0 py-3')}>{children}</div>
      </div>
    </>
  );
}

function Component({ path, component }: { path: string; component: any }) {
  return (
    <div>
      {component
        ? React.createElement(component, {
            path,
          })
        : null}
    </div>
  );
}
