import { CubeIcon, GitHubLogoIcon, GlobeIcon, SwitchIcon, TwitterLogoIcon, VideoIcon } from '@radix-ui/react-icons';
import { Command } from 'cmdk';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import React from 'react';

import { Box, Flex } from '@/components/ds';
import {
  CommandBottomBar,
  CommandDialog,
  CommandEmpty,
  CommandFooterText,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/primitives/cmdk/styled';

/**
 * Command.Item.Index
 * value = 'home'
 */
const Home = () => {
  const router = useRouter();

  return (
    <CommandItem value="home" onSelect={() => router.push('/')}>
      <Flex
        css={{
          boxSizing: 'border-box',
          display: 'inline-flex',
          direction: 'row',
          padding: 0,
          margin: 'auto',
          verticalAlign: 'middle'
        }}
      >
        <Box css={{ paddingTop: '6.2px', paddingRight: '5px', lineHeight: 'normal' }}>
          <GlobeIcon />
        </Box>
        <span>return home</span>
      </Flex>
    </CommandItem>
  );
};

/**
 * Command.Item.Projects
 * value = 'projects'
 */
const Docs = () => {
  const router = useRouter();

  return (
    <CommandItem value="docs" onSelect={() => router.push('/releases')}>
      <Flex
        css={{
          boxSizing: 'border-box',
          display: 'inline-flex',
          direction: 'row',
          padding: 0,
          margin: 'auto',
          verticalAlign: 'middle'
        }}
      >
        <Box css={{ paddingTop: '6.2px', paddingRight: '5px', lineHeight: 'normal' }}>
          <CubeIcon />
        </Box>
        <span>docs</span>
      </Flex>
    </CommandItem>
  );
};

/**
 * Command.Item.Film
 * value = 'film'
 */
const Film = () => {
  const router = useRouter();

  return (
    <CommandItem value="film" onSelect={() => router.push('/directed')}>
      <Flex
        css={{
          boxSizing: 'border-box',
          display: 'inline-flex',
          direction: 'row',
          padding: 0,
          margin: 'auto',
          verticalAlign: 'middle'
        }}
      >
        <Box css={{ paddingTop: '6.2px', paddingRight: '5px', lineHeight: 'normal' }}>
          <VideoIcon />
        </Box>
        <span>film</span>
      </Flex>
    </CommandItem>
  );
};

/**
 * Command.Item.GitHub
 * value = 'github'
 * url('github.com/chvndler');
 */
const GitHub = () => {
  const router = useRouter();

  return (
    <CommandItem value="github-icon" onSelect={() => router.push('https://github.com/chvndler')}>
      <Flex
        css={{
          boxSizing: 'border-box',
          display: 'inline-flex',
          direction: 'row',
          padding: 0,
          margin: 'auto',
          verticalAlign: 'middle'
        }}
      >
        <Box css={{ paddingTop: '6.2px', paddingRight: '5px', lineHeight: 'normal' }}>
          <GitHubLogoIcon />
        </Box>
        <span>github</span>
      </Flex>
    </CommandItem>
  );
};

/**
 * Command.Item.Twitter
 * value = 'twitter'
 * url('twitter.com/chv_ndler');
 */
const Twitter = () => {
  const router = useRouter();

  return (
    <CommandItem value="twitter" onSelect={() => router.push('https://twitter.com/chv_ndler')}>
      <Flex
        css={{
          boxSizing: 'border-box',
          display: 'inline-flex',
          direction: 'row',
          padding: 0,
          margin: 'auto',
          verticalAlign: 'middle'
        }}
      >
        <Box css={{ paddingTop: '6.2px', paddingRight: '5px', lineHeight: 'normal' }}>
          <TwitterLogoIcon />
        </Box>
        <span>twitter</span>
      </Flex>
    </CommandItem>
  );
};

/**
 * Command.Item.SystemAppearance
 * value = 'system-appearance'
 * darkTheme();
 */
const SystemAppearance = () => {
  const { theme, setTheme } = useTheme();

  return (
    <CommandItem value="system appearance" onSelect={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}>
      <Flex
        css={{
          boxSizing: 'border-box',
          display: 'inline-flex',
          direction: 'row',
          padding: 0,
          margin: 'auto',
          verticalAlign: 'middle'
        }}
      >
        <Box css={{ paddingTop: '6.2px', paddingRight: '5px', lineHeight: 'normal' }}>
          <SwitchIcon />
        </Box>
        <span>system appearance</span>
      </Flex>
    </CommandItem>
  );
};

/**
 * ⌘k...
 **/
export const CommandK = () => {
  const [search, setSearch] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('blog');

  React.useEffect(() => {
    const down = (e: { key: string; metaKey: any }) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Command shouldFilter={true} value={value} onValueChange={setValue}>
        <CommandDialog open={open} onOpenChange={setOpen} label="Global Command Menu">
          <CommandInput value={search} onValueChange={setSearch} autoFocus placeholder="keyword" />
          <CommandList>
            <CommandGroup heading="index">
              <Home />
              <Docs />
              <Film />
              <Twitter />
              <GitHub />
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="settings">
              <SystemAppearance />
            </CommandGroup>
            <CommandEmpty>.. no results found. try another keyword.</CommandEmpty>
          </CommandList>
          <CommandBottomBar>
            <CommandFooterText>© Atelier Design</CommandFooterText>
          </CommandBottomBar>
        </CommandDialog>
      </Command>
    </>
  );
};
