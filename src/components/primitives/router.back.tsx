'use client';

import { cn } from '@/lib/utils';
import { BadgeAsButton } from '@/components/shared';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function RouterPrev() {
  const router = useRouter();

  return (
    <div className='flex justify-start'>
      <BadgeAsButton className=''>
        <button
          type='button'
          onClick={() => router.back()}>
          <BackButton />
        </button>
      </BadgeAsButton>
    </div>
  );
}

function BackButton() {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        'text-carbon-500 hover:text-carbon-600',
        'dark:text-carbon-400 dark:hover:text-carbon-300',
      )}>
      <span className=''>← Previous</span>
    </div>
  );
}
