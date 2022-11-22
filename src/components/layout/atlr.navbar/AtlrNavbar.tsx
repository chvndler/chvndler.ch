import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from 'react';

import { PassLink } from '@/components/ds';
import { CDCLogo } from '@/components/logos';

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
} from './AtlrNavbar.styles';

const twitter = 'https://twitter.com/chvndlerch';
const github = 'https://github.com/chvndler';
const are_na = 'https://www.are.na/chvndler-ch';
const read_cv = 'https://read.cv/chvn';

export const AtlrNavbar = () => {
  return (
    <NavMenuRoot>
      <NavMenuBar>
        <NavigationMenu.Item>
          <NavMenuTrigger>
            Projects <NavIcxn variant="SmallArrowDown" />
          </NavMenuTrigger>

          <NavMenuContent>
            <NavMenuInner>
              <NavLink href="/projects/web">Web</NavLink>
              <NavLink href="/projects/film">Film</NavLink>
              <NavLink href="/">Music</NavLink>
              <NavLink href="/gfx">Graphics</NavLink>
              <NavLink href="/projects/three">Three.js</NavLink>
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

AtlrNavbar.displayName = 'AtlrNavbar';
