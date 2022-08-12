import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/CommandMenu';
import * as Popover from '@radix-ui/react-popover'
import { darkTheme, styled } from '@/lib/stitches.config';
import { Box, Canvas, Flex } from '@/ui';
import { ChatBubbleIcon, CubeIcon, GitHubLogoIcon, SwitchIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Command } from 'cmdk';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {blackA, violet} from "@radix-ui/colors";

/**
 * -- styled(); --
 */
const CommandBottomBar = styled('div', {
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  height: '32px',
  backgroundColor: 'transparent',
  borderTop: '1px solid $mauve3',
  
  padding: '0px',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
});

const CommandFooterText = styled('p', {
  fontFamily: '$pragmaticaExtended',
  fontWeight: '400',
  fontSize: '10px',
  letterSpacing: '0.02rem',
  color: '$mauve8',
  lineHeight: 'normal',
  textAlign: 'center',
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'mauve11',
  backgroundColor: 'white',
  boxShadow: `0 2px 10px $black10`,
  '&:hover': { backgroundColor: 'sky9' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

/**
 * ⌘k...
 **/
export const CmndK = () => {
  const [search, setSearch] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('blog');
  
  React.useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open);
      }
    };
    
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);
  
  
  return (
    <>

      <Popover.Root>
        <Popover.Trigger>
          <IconButton>popover</IconButton>
        </Popover.Trigger>

        <Popover.Content>
      <Command shouldFilter={true} value={value} onValueChange={setValue}>
        {/*<Canvas>*/}
          <CommandDialog open={open} onOpenChange={setOpen} label='Global Command Menu'>
            <CommandInput value={search} onValueChange={setSearch} autoFocus placeholder='keyword' />
            <CommandList>
              <CommandGroup heading='index'>
                <Blog />
                <Projects />
                <Twitter />
                <GitHub />
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading='settings'>
                <SystemAppearance />
              </CommandGroup>
              <CommandEmpty>
                .. no results found. try another keyword.
              </CommandEmpty>
            </CommandList>
            <CommandBottomBar>
              <CommandFooterText>chvndler.ch</CommandFooterText>
            </CommandBottomBar>
          </CommandDialog>
        {/*</Canvas>*/}
      </Command>
        </Popover.Content>
      </Popover.Root>
    </>
  );
};



/**
 * Command.Item.Blog
 * value = 'blog'
 */
const Blog = () => {
  const router = useRouter();
  
  return (
    <CommandItem value='blog' onSelect={() => router.push('/about')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        padding: 0,
        margin: 'auto',
        verticalAlign: 'middle',
      }}>
        <Box css={{ paddingTop: '6.2px', paddingRight: '5px', lineHeight: 'normal' }}>
          <ChatBubbleIcon />
        </Box>
        <span>blog</span>
      </Flex>
    </CommandItem>
  );
};

/**
 * Command.Item.Projects
 * value = 'projects'
 */
const Projects = () => {
  const router = useRouter();
  
  return (
    <CommandItem value='projects' onSelect={() => router.push('/projects')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        padding: 0,
        margin: 'auto',
        verticalAlign: 'middle',
      }}>
        <Box css={{ paddingTop: '6.2px', paddingRight: '5px', lineHeight: 'normal' }}>
          <CubeIcon />
        </Box>
        <span>projects</span>
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
    <CommandItem value='github-icon' onSelect={() => router.push('https://github.com/chvndler')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        padding: 0,
        margin: 'auto',
        verticalAlign: 'middle',
      }}>
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
    <CommandItem value='twitter' onSelect={() => router.push('https://twitter.com/chv_ndler')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        padding: 0,
        margin: 'auto',
        verticalAlign: 'middle',
      }}>
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
  const [theme, setTheme] = useState('theme-default');
  
  React.useEffect(() => {
    document.body.classList.remove('theme-default', darkTheme);
    document.body.classList.add(theme);
  }, [theme]);
  
  
  return (
    <CommandItem value='system appearance'
                 onSelect={() => setTheme(theme === 'theme-default' ? darkTheme : 'theme-default')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        padding: 0,
        margin: 'auto',
        verticalAlign: 'middle',
      }}>
        <Box css={{ paddingTop: '6.2px', paddingRight: '5px', lineHeight: 'normal' }}>
          <SwitchIcon />
        </Box>
        <span>system appearance</span>
      </Flex>
    </CommandItem>
  );
};
