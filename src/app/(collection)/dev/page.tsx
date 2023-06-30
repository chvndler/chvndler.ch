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
            <p className='text-center font-walter text-[14px] font-semibold text-carbon-900'>
              Developer Test Suite
            </p>
          </span>

          <div className='font-normal font-walter'>
            <p className='text-[18px] font-semibold leading-[4rem] text-azure'>
              Walter Neue
            </p>
            Strawberries Bracciano Or Bust: A Cruise-Holmes Wedding Round-Up.
            Strawberries are really bad right now, are they out of season? Oh my
            god I’m going to cry my diamond earrings. This room is like the vibe
            for how all houses should be.
          </div>
          <div className='font-semibold font-walter'>
            Strawberries Bracciano Or Bust: A Cruise-Holmes Wedding Round-Up.
            Strawberries are really bad right now, are they out of season? Oh my
            god I’m going to cry my diamond earrings. This room is like the vibe
            for how all houses should be.
          </div>
          <div className='font-favorit font-[400]'>
            <p className='text-[18px] font-[600] leading-[4rem] text-jade'>
              Favorit
            </p>
            The cozy cabin nestled amidst towering pines, exuding rustic charm
            and tranquility. Sunbeams pierced through ancient branches, casting
            ethereal patterns on weathered floorboards. A crackling hearth
            danced with warmth, inviting laughter and storytelling.
          </div>
          <div className='font-favorit font-[600]'>
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

          <div className='font-repro font-[400]'>
            <p className='text-[18px] font-[600] leading-[4rem] text-paleSky'>
              Repro
            </p>
            Dawn's golden rays embraced dew-kissed petals, awakening a garden in
            bloom. Fragrant blossoms danced in the gentle breeze, as butterflies
            painted the air with vibrant strokes. Nature's masterpiece unfolded,
            inviting hearts to find solace and inspiration in the exquisite
            harmony of its tranquil sanctuary.
          </div>
          <div className='font-repro font-[700]'>
            Dawn's golden rays embraced dew-kissed petals, awakening a garden in
            bloom. Fragrant blossoms danced in the gentle breeze, as butterflies
            painted the air with vibrant strokes. Nature's masterpiece unfolded,
            inviting hearts to find solace and inspiration in the exquisite
            harmony of its tranquil sanctuary.
          </div>
          <div className='font-reproMono text-xs font-[400] uppercase'>
            Fragrant blossoms danced in the gentle breeze.
          </div>
          <div className='font-reproMono text-xs font-[700] uppercase'>
            Fragrant blossoms danced in the gentle breeze.
          </div>
          <div className='font-helmet text-sm font-[700] uppercase'>
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
