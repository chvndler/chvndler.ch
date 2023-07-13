import { AppController } from '@/components/layout';

import type { Metadata } from 'next';
import { TestSection } from '@/components/core';
import { BadgeDefault, Space } from '@/components/shared';

export const metadata: Metadata = {
  title: 'dev.chandler.',
  description: 'Projects I have worked on, and am currently working on.',
};

export default function DevIndex() {
  return (
    <>
      <AppController>
        <TestSection>
          <span className='mx-auto w-fit whitespace-nowrap rounded-full bg-graphicGreen px-2.5 py-0.5'>
            <p className='text-center font-sohne text-[14px] font-semibold text-carbon-900'>
              Developer Test Suite
            </p>
          </span>

          <section>
            <p className='font-twk text-[40px] font-[550] uppercase leading-[4rem] text-carbon-600'>
              TWK Lausanne
            </p>
            <p className='font-favorit text-[40px] font-[600] uppercase leading-[4rem] text-carbon-600'>
              Favorit
            </p>
            <p className='font-sohne text-[40px] font-[500] uppercase leading-[4rem] text-carbon-600'>
              Söhne
            </p>
            <p className='font-inter text-[40px] font-[600] uppercase leading-[4rem] text-carbon-600'>
              Inter
            </p>
            <p className='font-mono text-[40px] font-[600] uppercase leading-[4rem] text-carbon-600'>
              IBM Plex Mono
            </p>
            <Space />
            <Space />
            <p className='font-favorit text-[40px] font-[600] leading-[4rem] text-carbon-600'>
              Favorit Bold / 40px / 600
            </p>
            <p className='font-sohne text-[40px] font-[600] leading-[4rem] text-carbon-600'>
              Söhne Bold / 40px / 600
            </p>
            <p className='font-inter text-[40px] font-[600] leading-[4rem] text-carbon-600'>
              Inter Bold / 40px / 600
            </p>
            <p className='font-mono text-[30px] font-[600] leading-[4rem] text-carbon-600'>
              IBM Plex Mono Bold / 30px / 600
            </p>
          </section>

          <section>
            <div className='font-twk font-[400]'>
              <p className='text-[18px] font-[600] leading-[4rem] text-jade'>
                TWK Lausanne
              </p>

              <p className='text-[17px] font-[400] leading-6 text-carbon-600'>
                The cozy cabin nestled amidst towering pines, exuding rustic
                charm and tranquility. Sunbeams pierced through ancient
                branches, casting ethereal patterns on weathered floorboards. A
                crackling hearth danced with warmth, inviting laughter and
                storytelling.
              </p>
            </div>
          </section>

          <section>
            <div className='font-favorit font-[400]'>
              <p className='text-[18px] font-[600] leading-[4rem] text-jade'>
                Favorit
              </p>

              <p className='text-[17px] font-[400] leading-6 text-carbon-600'>
                The cozy cabin nestled amidst towering pines, exuding rustic
                charm and tranquility. Sunbeams pierced through ancient
                branches, casting ethereal patterns on weathered floorboards. A
                crackling hearth danced with warmth, inviting laughter and
                storytelling.
              </p>
            </div>
          </section>

          <section>
            <div className='font-sohne font-[400]'>
              <p className='text-[18px] font-[500] leading-[4rem] text-sun'>
                Söhne
              </p>

              <p className='text-[17px] font-[400] leading-6 text-carbon-600'>
                Whispering wind rustled autumn leaves, painting a tapestry of
                fiery hues. Nature's farewell symphony echoed through the serene
                woodland, an ode to the fleeting beauty of the passing season.
              </p>
            </div>
          </section>

          <section>
            <div className='font-inter font-[400]'>
              <p className='app-blue text-[18px] font-[600] leading-[4rem]'>
                Inter
              </p>
              <p className='text-[16px] font-[400] leading-6 text-carbon-600'>
                Sunset's embrace kissed the horizon, melting hues of gold and
                crimson into a breathtaking canvas. The ocean whispered its
                secrets, serenading wanderers captivated by its tranquil allure.
                In this fleeting moment, time stood still, wrapped in the serene
                beauty of a world bathed in twilight's tender glow.
              </p>
            </div>
          </section>

          <section>
            <div className='font-mono font-[400]'>
              <p className='app-blue text-[18px] font-[600] leading-[4rem]'>
                IBM Plex Mono (Text)
              </p>
              <p className='text-[14px] font-[450] leading-6 text-carbon-600'>
                Sunset's embrace kissed the horizon, melting hues of gold and
                crimson into a breathtaking canvas. The ocean whispered its
                secrets, serenading wanderers captivated by its tranquil allure.
                In this fleeting moment, time stood still, wrapped in the serene
                beauty of a world bathed in twilight's tender glow.
              </p>
            </div>
          </section>

          <section className='font-favorit'>
            <p className='text-[20px] font-[350] leading-[4rem] text-carbon-600'>
              Favorit Book
            </p>
            <p className='text-[20px] font-[400] leading-[4rem] text-carbon-600'>
              Favorit Regular
            </p>
            <p className='text-[20px] font-[500] leading-[4rem] text-carbon-600'>
              Favorit Medium
            </p>
            <p className='text-[20px] font-[600] leading-[4rem] text-carbon-600'>
              Favorit Bold
            </p>

            <p className='text-[20px] font-[350] italic leading-[4rem] text-carbon-600'>
              Favorit Book Italic
            </p>
          </section>

          <Space />
          <Space />
          <section className='font-sohne'>
            <p className='text-[20px] font-[350] leading-[4rem] text-carbon-600'>
              Sohne Regular
            </p>
            <p className='text-[20px] font-[400] leading-[4rem] text-carbon-600'>
              Sohne Regular
            </p>
            <p className='text-[20px] font-[500] leading-[4rem] text-carbon-600'>
              Sohne Medium
            </p>
            <p className='text-[20px] font-[600] leading-[4rem] text-carbon-600'>
              Sohne Bold
            </p>
          </section>

          <Space />
          <Space />
          <section className='font-inter'>
            <p className='text-[20px] font-[350] leading-[4rem] text-carbon-600'>
              Inter Regular
            </p>
            <p className='text-[20px] font-[400] leading-[4rem] text-carbon-600'>
              Inter Regular
            </p>
            <p className='text-[20px] font-[500] leading-[4rem] text-carbon-600'>
              Inter Medium
            </p>
            <p className='text-[20px] font-[600] leading-[4rem] text-carbon-600'>
              Inter Bold
            </p>
          </section>

          <Space />
          <Space />
          <section className='font-mono'>
            <p className='text-[20px] font-[400] leading-[4rem] text-carbon-600'>
              IBM Plex Mono Regular
            </p>
            <p className='text-[20px] font-[450] leading-[4rem] text-carbon-600'>
              IBM Plex Mono Text
            </p>
            <p className='text-[20px] font-[500] leading-[4rem] text-carbon-600'>
              IBM Plex Mono Medium
            </p>
            <p className='text-[20px] font-[600] leading-[4rem] text-carbon-600'>
              IBM Plex Mono SemiBold
            </p>

            <p className='text-[20px] font-[700] leading-[4rem] text-carbon-600'>
              IBM Plex Mono Bold
            </p>
          </section>

          <div className='font-favorit text-sm font-bold uppercase'>
            Fragrant blossoms danced in the gentle breeze.
          </div>
          <div className='font-sohne text-sm font-bold uppercase'>
            Fragrant blossoms danced in the gentle breeze.
          </div>
          <div className='font-inter text-sm font-bold uppercase'>
            Fragrant blossoms danced in the gentle breeze.
          </div>

          <div className='font-mono text-sm font-[450] uppercase'>
            Fragrant blossoms danced in the gentle breeze.
          </div>

          <BadgeDefault>Default</BadgeDefault>

          <BadgeDefault>
            <p className='pt-0.5 text-right font-favorit text-[10px] font-[500] uppercase leading-[20px] text-carbon-800 dark:text-carbon-200'>
              use ⌘ K to navigate
            </p>
          </BadgeDefault>
        </TestSection>
      </AppController>
    </>
  );
}
