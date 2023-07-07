'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from './cmdk';

const twitter = 'https://twitter.com/chvndlerch';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (value: string) => {
    if (value.startsWith('/')) {
      window.open(value, '_self');
    } else {
      window.open(value, '_blank');
    }
    setOpen(false);
  };

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setOpen(false);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}>
      <CommandInput placeholder='Type or search a command.' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='SUGGESTIONS'>
          <CommandItem
            onSelect={handleSelect}
            value={twitter}>
            Twitter
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading='PROJECTS'>
          <CommandItem
            onSelect={handleSelect}
            value='/projects'>
            Internet Projects
          </CommandItem>
          <CommandItem
            onSelect={handleSelect}
            value='/media'>
            Film Projects
          </CommandItem>
          <CommandItem
            onSelect={handleSelect}
            value='/interact'>
            Component Gallery
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading='SETTINGS'>
          <CommandItem
            onSelect={handleTheme}
            value='theme'>
            Switch Theme
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
