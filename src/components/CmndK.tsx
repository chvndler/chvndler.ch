import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/CommandMenu';
import { styled } from '@/lib/stitches.config';
import { Box, Flex, IconButton, Text } from '@/ui';
import {
  ChatBubbleIcon,
  CubeIcon,
  GitHubLogoIcon,
  SwitchIcon,
  TwitterLogoIcon,
  VideoIcon,
} from '@radix-ui/react-icons';
import { Command } from 'cmdk';
import { useRouter } from 'next/router';
import React from 'react';
import { useTheme } from 'next-themes';
import { ThemeButton } from '@/components/ThemeButton';
import { DropMenu } from '@/components/DropMenu';

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


/**
 * Command.Item.Blog
 * value = 'blog'
 */
const Blog = () => {
  const router = useRouter();

  return (
    <CommandItem value='blog' onSelect={() => router.push('/blog')}>
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
 * Command.Item.Film
 * value = 'film'
 */
const Film = () => {
  const router = useRouter();

  return (
    <CommandItem value='film' onSelect={() => router.push('/directed')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        padding: 0,
        margin: 'auto',
        verticalAlign: 'middle',
      }}>
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
  const { theme, setTheme } = useTheme();

  return (
    <CommandItem value='system appearance'
                 onSelect={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}>
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
      <Command shouldFilter={true} value={value} onValueChange={setValue}>
        <CommandDialog open={open} onOpenChange={setOpen} label='Global Command Menu'>
          <CommandInput value={search} onValueChange={setSearch} autoFocus placeholder='keyword' />
          <CommandList>
            <CommandGroup heading='index'>
              <Blog />
              <Projects />
              <Film />
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
      </Command>


      <Box css={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: '20px',
        margin: 'auto',
        textAlign: 'center',
        alignItems: 'center',
        '@sm': {
          paddingBottom: '30px',
        },
      }}>
        <Flex direction='row' css={{ gap: '4px', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton
            title='⌘K'
            aria-label='Invoke Cmd+k Menu'
            onClick={() => setOpen(true)}
            css={{
              '@xl': {
                display: 'block',
              },
              '@lg': {
                display: 'block',
              },
              '@md': {
                display: 'block',
              },
              '@sm': {
                display: 'none',
              },
              '@xs': {
                display: 'none',
              },
            }}>
            <Text css={{ fontSize: '11px', color: '$hiContrast' }}>
              ⌘K
            </Text>
          </IconButton>

          <Box
            css={{
              '@xl': {
                display: 'none',
              },
              '@lg': {
                display: 'none',
              },
              '@md': {
                display: 'none',
              },
              '@sm': {
                display: 'block',
              },
              '@xs': {
                display: 'block',
              },
            }}>
            <DropMenu />
          </Box>

          <ThemeButton />
        </Flex>
      </Box>
    </>
  );
};
