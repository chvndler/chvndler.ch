import React from 'react';
import { RouterPrev } from '@/components/primitives';

import { notFound } from 'next/navigation';
import { AppController } from '@/components/layout';
import { allComponents, type ComponentSlug } from '@/lib/components';
import { cn } from '@/lib/utils';

import type { Metadata } from 'next';
import { ErrorComponent } from '@/components/core/error.component';

interface PrimitiveXProps {
  params: {
    slug: string[];
  };
}

function getComponent(params: PrimitiveXProps['params']) {
  const slug = params?.slug?.join('/');
  const comp = allComponents.find((comp) => comp.slugAsParams === slug);
  if (!comp) {
    return null;
  }
  return comp;
}

export function generateStaticParams() {
  return allComponents.map((compo) => ({
    params: {
      slug: compo.slugAsParams.split('/'),
    },
  }));
}

export function generateMetadata({ params }: PrimitiveXProps): Metadata {
  const prime = getComponent(params);

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

function PrimitiveWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        id='primitive-x'
        className='mx-auto w-full rounded-md bg-carbon-50 px-4 py-14 shadow-sminner dark:bg-carbon-900 md:px-[92px]'>
        <div className={cn('primitive_inner px-0 py-3')}>{children}</div>
      </div>
    </>
  );
}

function Component({ path, component }: { path: string; component: any }) {
  return (
    <div>
      {component &&
        React.createElement(component, {
          path,
        })}
    </div>
  );
}

export default function ViewPrimitivePage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug.join('/');
  const x = allComponents.find((comp) => comp.slugAsParams === slug);
  if (!x) {
    notFound();
    return (
      <>
        <ErrorComponent
          error={Error('Not Found')}
          reset={() => {
            console.log('reset');
          }}
        />
      </>
    );
  }

  // const compo = x.component;

  return (
    <AppController>
      <article
        key={x.title}
        className='text-md prose prose-neutral mb-20 py-10'>
        <RouterPrev />

        <h3 className='font-favorit leading-4 tracking-tight text-carbon-800 dark:text-carbon-100'>
          {x.title}
        </h3>
        <p className='font-favorit text-sm leading-5 text-carbon-600 dark:text-carbon-300'>
          {x.excerpt}
        </p>
      </article>
      <>
        <PrimitiveWrapper>
          <Component
            key={x.slug}
            path={x.url}
            component={x.component}
          />
        </PrimitiveWrapper>
      </>
    </AppController>
  );
}
