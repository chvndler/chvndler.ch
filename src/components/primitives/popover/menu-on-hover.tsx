import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from 'react';

import { CDCLogo } from '@/components/logos';
import { PassLink } from '@/components/primitives/pass-link';

import {
  NavContentBox,
  NavIcxn,
  NavLink,
  NavMenuBar,
  NavMenuContent,
  NavMenuInner,
  NavMenuRoot,
  NavMenuTrigger,
  NavMenuViewport,
  Viewport
} from './menu-on-hover.styles';

const twitter = 'https://twitter.com/chvndlerch';
const github = 'https://github.com/chvndler';
const are_na = 'https://www.are.na/chvndler-ch';
const read_cv = 'https://read.cv/chvn';

export const MenuOnHoverComponent = () => {
  return (
    <NavMenuRoot>
      <NavMenuBar>
        <NavigationMenu.Item>
          <NavMenuTrigger>
            Projects <NavIcxn variant="SmallArrowDown" />
          </NavMenuTrigger>

          <NavMenuContent>
            <NavMenuInner>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/projects">Project</NavLink>
              <NavLink href="/film">Video Production</NavLink>
              <NavLink href="/gfx">GFX</NavLink>
              <NavLink href="/three">three.js</NavLink>
            </NavMenuInner>
          </NavMenuContent>
        </NavigationMenu.Item>

        <NavContentBox alignment="center">
          <PassLink href="/">
            <CDCLogo />
          </PassLink>
        </NavContentBox>

        <NavigationMenu.Item>
          <NavMenuTrigger>
            Connect <NavIcxn variant="SmallArrowDown" />
          </NavMenuTrigger>
          <NavMenuContent>
            <NavMenuInner>
              <NavLink href={twitter} target={'_blank'} rel={'norefferer noopener'}>
                Twitter
              </NavLink>
              <NavLink href={github} target={'_blank'} rel={'norefferer noopener'}>
                GitHub
              </NavLink>
              <NavLink href={are_na} target={'_blank'} rel={'norefferer noopener'}>
                Are.na
              </NavLink>
              <NavLink href={read_cv} target={'_blank'} rel={'norefferer noopener'}>
                Read.cv
              </NavLink>
            </NavMenuInner>
          </NavMenuContent>
        </NavigationMenu.Item>
      </NavMenuBar>

      <Viewport>
        <NavMenuViewport />
      </Viewport>
    </NavMenuRoot>
  );
};
