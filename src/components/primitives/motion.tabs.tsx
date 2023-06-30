'use client';

import { motion, LayoutGroup } from 'framer-motion';
import { useId } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'react-aria-components';

const tabs = [
  { id: 'world', label: 'World' },
  { id: 'ny', label: 'N.Y.' },
  { id: 'business', label: 'Business' },
];

export const MotionTabs = () => {
  const id = useId();

  return (
    <>
      <Tabs className='mx-auto my-12 h-auto w-fit max-w-[350px]'>
        <TabList
          className='flex space-x-1'
          items={tabs}>
          {(tab) => (
            <Tab
              className={({ isSelected }) =>
                `${
                  isSelected
                    ? ''
                    : 'data-[hovered]:text-carbon-500 data-[pressed]:text-carbon-400'
                } text-md group relative cursor-default touch-none rounded-full px-3 py-1.5 text-carbon-700 outline-none transition sm:text-sm`
              }
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}>
              {({ isSelected }) => (
                <>
                  {isSelected && (
                    <LayoutGroup id={id}>
                      <motion.div
                        layoutId='bubble'
                        // Not sure why this is needed, but without it there is no animation...
                        layoutDependency={false}
                        className='ring-sky-400 ring-offset-gray-800 absolute inset-0 z-10 bg-carbon-50 ring-offset-2 group-data-[focus-visible]:ring-2'
                        style={{ borderRadius: 9999 }}
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    </LayoutGroup>
                  )}
                  {tab.label}
                </>
              )}
            </Tab>
          )}
        </TabList>

        <TabPanels items={tabs}>
          {(tab) => (
            <TabPanel className='ring-sky-400 my-4 w-full rounded px-2 text-sm font-light text-carbon-500 outline-none data-[focus-visible]:ring-2'>
              <h2 className='mb-2 font-semibold'>{tab.label} contents...</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                sit amet nisl blandit, pellentesque eros eu, scelerisque eros.
                Sed cursus urna at nunc lacinia dapibus.
              </p>
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
    </>
  );
};


