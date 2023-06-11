import { AppController } from '../../components/layout';
import { content } from '../../lib/website.config';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '../../components/primitives/menubar';

export default function ArchiveIndex() {
  const copy = content.archive;

  return (
    <>
      <AppController>
        <section className='py-10 pv-3'>
          <h3 className='mb-2 text-2xl font-normal tracking-tight font-archivo text-carbon-700 dark:text-carbon-300'>
            {copy.heading.partial}{' '}
            <span className='font-bold font-archivo'>{copy.heading.bold}</span>
          </h3>

          <p className='mb-6 text-xs text-carbon-500 dark:text-carbon-400'>playground</p>
        </section>

        <section className='py-10 pv-3'>
          <MenuInstance />
        </section>
      </AppController>
    </>
  );
}

function MenuInstance() {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Projects</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Media</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarItem>Share</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
