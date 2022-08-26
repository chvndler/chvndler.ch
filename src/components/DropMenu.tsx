import React from 'react';
import { keyframes, styled } from '@stitches/react';
import { mauve, violet } from '@radix-ui/colors';
import {
  ChatBubbleIcon,
  CubeIcon,
  GitHubLogoIcon,
  GlobeIcon,
  HamburgerMenuIcon,
  SwitchIcon,
  TwitterLogoIcon,
  VideoIcon,
} from '@radix-ui/react-icons';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Flex, IconButton } from '@/ui';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});


const contentStyles = {
  margin: '0',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$mauve2',
  borderRadius: '12px',
  border: '2px solid $mauve6',
  minWidth: '80vw',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '20px',
  paddingBottom: '50px',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 0px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',


  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '900ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
};


/**
 * -- styled(); --
 */
const MenuBottomBar = styled('div', {
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


const DropMenuFooterText = styled('p', {
  fontFamily: '$pragmaticaExtended',
  fontWeight: '400',
  fontSize: '10px',
  letterSpacing: '0.02rem',
  color: '$mauve8',
  lineHeight: 'normal',
  textAlign: 'center',
});

const StyledContent = styled(DropdownMenuPrimitive.Content, { ...contentStyles });

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  display: 'none',
  fill: 'transparent',
});

function Content({ children, ...props }) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  );
}

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent, { ...contentStyles });

function SubContent(props) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledSubContent {...props} />
    </DropdownMenuPrimitive.Portal>
  );
}

const itemStyles = {
  all: 'unset',
  fontSize: '14px',
  fontFamily: '$chGrotesk',
  fontWeight: '500',
  letterSpacing: 'normal',
  lineHeight: '28px',
  color: '$mauve9',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  height: 28,
  padding: '0px 8px 0px 8px',
  position: 'relative',
  userSelect: 'none',
  width: 'auto',

  willChange: 'background, color',
  transition: 'all 150ms ease',
  transitionProperty: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: '$chvn3',
    color: violet.violet1,
  },


};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
  ...itemStyles,
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  fontFamily: '$pragmaticaExtended',
  fontSize: '11px',
  paddingLeft: '8px',
  lineHeight: '25px',
  color: '$tartOrange',
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: '$mauve5',
  margin: 5,
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubTrigger = StyledSubTrigger;
export const DropdownMenuSubContent = SubContent;

// Your app...
const Box = styled('div', {});


/**
 * MOBILE ONLY
 * DropMenu.Blog.Item
 */
const MobileBlog = () => {
  const router = useRouter();

  return (
    <DropdownMenuItem onSelect={() => router.push('/blog')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        // padding: 0,
        margin: 'auto',
        width: '100%',
        verticalAlign: 'middle',
      }}>
        <Box css={{ paddingTop: '6.5px', paddingLeft: 0, paddingRight: 5, lineHeight: 'normal' }}>
          <ChatBubbleIcon />
        </Box>
        <span>blog</span>
      </Flex>
    </DropdownMenuItem>
  );
};


/**
 * MOBILE ONLY
 * DropMenu.Projects.Item
 */
const MobileProjects = () => {
  const router = useRouter();

  return (
    <DropdownMenuItem onSelect={() => router.push('/projects')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        margin: 'auto',
        width: '100%',
        verticalAlign: 'middle',
      }}>
        <Box css={{ paddingTop: '6.5px', paddingLeft: 0, paddingRight: 5, lineHeight: 'normal' }}>
          <CubeIcon />
        </Box>
        <span>projects</span>
      </Flex>
    </DropdownMenuItem>
  );
};


/**
 * MOBILE ONLY
 * DropMenu.Film.Item
 */
const MobileFilm = () => {
  const router = useRouter();

  return (
    <DropdownMenuItem onSelect={() => router.push('/film')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        margin: 'auto',
        width: '100%',
        verticalAlign: 'middle',
      }}>
        <Box css={{ paddingTop: '6.5px', paddingLeft: 0, paddingRight: 5, lineHeight: 'normal' }}>
          <VideoIcon />
        </Box>
        <span>film</span>
      </Flex>
    </DropdownMenuItem>
  );
};

/**
 * MOBILE ONLY
 * DropMenu.GitHub.Item
 */
const MobileGithub = () => {
  const router = useRouter();

  return (
    <DropdownMenuItem onSelect={() => router.push('https://github.com/chvndler')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        margin: 'auto',
        width: '100%',
        verticalAlign: 'middle',
      }}>
        <Box css={{ paddingTop: '6.5px', paddingLeft: 0, paddingRight: 5, lineHeight: 'normal' }}>
          <GitHubLogoIcon />
        </Box>
        <span>github</span>
      </Flex>
    </DropdownMenuItem>
  );
};


/**
 * MOBILE ONLY
 * DropMenu.Twitter.Item
 */
const MobileTwitter = () => {
  const router = useRouter();

  return (
    <DropdownMenuItem onSelect={() => router.push('https://twitter.com/chv_ndler')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        margin: 'auto',
        width: '100%',
        verticalAlign: 'middle',
      }}>
        <Box css={{ paddingTop: '6.5px', paddingLeft: 0, paddingRight: 5, lineHeight: 'normal' }}>
          <TwitterLogoIcon />
        </Box>
        <span>twitter</span>
      </Flex>
    </DropdownMenuItem>
  );
};


/**
 * MOBILE ONLY
 * DropMenu.SystemAppearance.Item
 */
const MobileSystemAppearanceToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenuItem onSelect={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        margin: 'auto',
        width: '100%',
        verticalAlign: 'middle',
      }}>
        <Box css={{ paddingTop: '6.5px', paddingLeft: 0, paddingRight: 5, lineHeight: 'normal' }}>
          <SwitchIcon />
        </Box>
        <span>toggle system appearance</span>
      </Flex>
    </DropdownMenuItem>
  );
};


/**
 * MOBILE ONLY
 * DropMenu.Index.Item
 */
const MobileIndex = () => {
  const router = useRouter();

  return (
    <DropdownMenuItem onSelect={() => router.push('/')}>
      <Flex css={{
        boxSizing: 'border-box',
        display: 'inline-flex',
        direction: 'row',
        margin: 'auto',
        width: '100%',
        verticalAlign: 'middle',
      }}>
        <Box css={{ paddingTop: '6.5px', paddingLeft: 0, paddingRight: 5, lineHeight: 'normal' }}>
          <GlobeIcon />
        </Box>
        <span>index</span>
      </Flex>
    </DropdownMenuItem>
  );
};


/**
 *
 * ...Export app...
 * ...DROPMENU ©2022...
 *
 * ...Created by @chvndler
 *
 */

export const DropMenu = () => {
  return (
    <>

      <DropdownMenu>

        <DropdownMenuTrigger asChild>
          <IconButton aria-label='Customise options'>
            <HamburgerMenuIcon />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={40} data-align-center>
          <DropdownMenuLabel>index</DropdownMenuLabel>
          <MobileBlog />
          <MobileProjects />
          <MobileFilm />
          <MobileGithub />
          <MobileTwitter />
          <DropdownMenuSeparator />
          <DropdownMenuLabel>settings</DropdownMenuLabel>
          <MobileSystemAppearanceToggle />
          <MobileIndex />

          <MenuBottomBar>
            <DropMenuFooterText>chvndler.ch</DropMenuFooterText>
          </MenuBottomBar>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
