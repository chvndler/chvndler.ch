import { AppWrapper } from '@/components/layout';
import { content } from '../../lib/website.config';

export default function ArchiveIndex() {
  const copy = content.archive;

  return (
    <>
      <AppWrapper>
        <section className='pv-3 py-10'>
          <h3 className='mb-2 font-archivo text-2xl font-normal tracking-tight text-carbon-700 dark:text-carbon-300'>
            {copy.heading.partial}{' '}
            <span className='font-archivo font-bold'>{copy.heading.bold}</span>
          </h3>
        </section>
      </AppWrapper>
    </>
  );
}
