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
              <NavLink href="/projects">Twitter</NavLink>
              <NavLink href="/projects">GitHub</NavLink>
              <NavLink href="/projects">Are.na</NavLink>
              <NavLink href="/projects">Read.cv</NavLink>
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
