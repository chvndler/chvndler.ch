'use client';

import React, { useState, useEffect } from 'react';

import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from './cmdk';

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}>
      <CommandInput placeholder='Type or search a command.' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='SUGGESTIONS'>
          <CommandItem>Twitter</CommandItem>
        </CommandGroup>
        <CommandGroup heading='PROJECTS'>
          <CommandItem value='prj-web'>Internet Projects</CommandItem>
          <CommandItem value='prj-film'>Film Projects</CommandItem>
          <CommandItem value='prj-comp'>Component Gallery</CommandItem>
        </CommandGroup>
        <CommandGroup heading='CONNECT'>
          <CommandItem value='con-tw'>Twitter</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
