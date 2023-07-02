import { AppController } from '@/components/layout';

import type { Metadata } from 'next/types';
import { Introduction, TestSection } from '@/components/core';
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
            <p className='font-walter text-center text-[14px] font-semibold text-carbon-900'>
              Developer Test Suite
            </p>
          </span>

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
            <p className='text-[20px] font-[400] italic leading-[4rem] text-carbon-600'>
              Favorit Regular Italic
            </p>
            <p className='text-[20px] font-[500] italic leading-[4rem] text-carbon-600'>
              Favorit Medium Italic
            </p>
            <p className='text-[20px] font-[600] italic leading-[4rem] text-carbon-600'>
              Favorit Bold Italic
            </p>
          </section>

          <div className='font-favorit font-[400]'>
            <p className='text-[18px] font-[600] leading-[4rem] text-jade'>
              Favorit
            </p>
            The cozy cabin nestled amidst towering pines, exuding rustic charm
            and tranquility. Sunbeams pierced through ancient branches, casting
            ethereal patterns on weathered floorboards. A crackling hearth
            danced with warmth, inviting laughter and storytelling.
          </div>
          <div className='font-sohne font-[400]'>
            <p className='text-[18px] font-[500] leading-[4rem] text-sun'>
              Söhne
            </p>
            Whispering wind rustled autumn leaves, painting a tapestry of fiery
            hues. Nature's farewell symphony echoed through the serene woodland,
            an ode to the fleeting beauty of the passing season.
          </div>
          <div className='font-sohne font-[500]'>
            Whispering wind rustled autumn leaves, painting a tapestry of fiery
            hues. Nature's farewell symphony echoed through the serene woodland,
            an ode to the fleeting beauty of the passing season.
          </div>
          <div className='font-sohne font-[600]'>
            Whispering wind rustled autumn leaves, painting a tapestry of fiery
            hues. Nature's farewell symphony echoed through the serene woodland,
            an ode to the fleeting beauty of the passing season.
          </div>
          <div className='font-sohne font-[700]'>
            Whispering wind rustled autumn leaves, painting a tapestry of fiery
            hues. Nature's farewell symphony echoed through the serene woodland,
            an ode to the fleeting beauty of the passing season.
          </div>

          <div className='font-inter font-[400]'>
            <p className='app-yellow text-[18px] font-[600] leading-[4rem]'>
              Inter
            </p>
            Sunset's embrace kissed the horizon, melting hues of gold and
            crimson into a breathtaking canvas. The ocean whispered its secrets,
            serenading wanderers captivated by its tranquil allure. In this
            fleeting moment, time stood still, wrapped in the serene beauty of a
            world bathed in twilight's tender glow.
          </div>
          <div className='font-inter font-[500]'>
            Sunset's embrace kissed the horizon, melting hues of gold and
            crimson into a breathtaking canvas. The ocean whispered its secrets,
            serenading wanderers captivated by its tranquil allure. In this
            fleeting moment, time stood still, wrapped in the serene beauty of a
            world bathed in twilight's tender glow.
          </div>
          <div className='font-inter font-[600]'>
            Sunset's embrace kissed the horizon, melting hues of gold and
            crimson into a breathtaking canvas. The ocean whispered its secrets,
            serenading wanderers captivated by its tranquil allure. In this
            fleeting moment, time stood still, wrapped in the serene beauty of a
            world bathed in twilight's tender glow.
          </div>
          <div className='font-inter font-[700]'>
            Sunset's embrace kissed the horizon, melting hues of gold and
            crimson into a breathtaking canvas. The ocean whispered its secrets,
            serenading wanderers captivated by its tranquil allure. In this
            fleeting moment, time stood still, wrapped in the serene beauty of a
            world bathed in twilight's tender glow.
          </div>

          <div className='font-favorit text-sm font-bold uppercase'>
            Fragrant blossoms danced in the gentle breeze.
          </div>
          <Introduction />

          {/*}
          <ProjectHighlights projects={...allProjects.slice(0, 4)} />
  */}
        </TestSection>
      </AppController>
    </>
  );
}
