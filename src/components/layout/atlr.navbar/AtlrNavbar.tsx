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

/**
 * @ConnectLinks
 */
const twitter = 'https://twitter.com/chvndlerch';
const github = 'https://github.com/chvndler';
const code_sandbox = 'https://codesandbox.io/u/chvndler';
const instagram = 'https://instagram.com/chv.ndler';
const are_na = 'https://www.are.na/chvndler-ch';
const read_cv = 'https://read.cv/chvn';

export const AtlrNavbar = () => {
  return (
    <NavMenuRoot>
      <NavMenuBar>
        {/* <!-- "Projects" Menu --> */}
        <NavigationMenu.Item>
          <NavMenuTrigger>
            Projects <NavIcxn variant="SmallArrowDown" />
          </NavMenuTrigger>

          <NavMenuContent>
            <NavMenuInner>
              <NavLink href={'/'}>index</NavLink>
              <NavLink href={'/projects/web'}>Web Projects</NavLink>
              <NavLink href={'/projects/film'}>Film Projects</NavLink>
              <NavLink href={'/projects/three'}>Three.js</NavLink>
              <NavLink level2 href={'/notes'}>
                Notes
              </NavLink>
              <NavLink level2 disabled href={'/archive'}>
                Archive
              </NavLink>
              <NavLink level2 disabled href={'/music'}>
                Music
              </NavLink>
            </NavMenuInner>
          </NavMenuContent>
        </NavigationMenu.Item>
        {/* <!-- END !  "Projects" Menu --> */}

        <NavContentBox alignment="center">
          <PassLink href={'/'}>
            <CDCLogo />
          </PassLink>
        </NavContentBox>

        {/* <!-- "Connect" Menu --> */}
        <NavigationMenu.Item>
          <NavMenuTrigger>
            Connect <NavIcxn variant="SmallArrowDown" />
          </NavMenuTrigger>
          <NavMenuContent>
            <NavMenuInner>
              <NavLink href={twitter} target={'_blank'} rel={'noreferrer noopener'}>
                Twitter
              </NavLink>
              <NavLink href={github} target={'_blank'} rel={'noreferrer noopener'}>
                GitHub
              </NavLink>
              <NavLink href={code_sandbox} target={'_blank'} rel={'noreferrer noopener'}>
                CodeSandbox
              </NavLink>
              <NavLink href={instagram} target={'_blank'} rel={'noreferrer noopener'}>
                Instagram
              </NavLink>
              <NavLink href={are_na} target={'_blank'} rel={'noreferrer noopener'}>
                Are.na
              </NavLink>
              <NavLink href={read_cv} target={'_blank'} rel={'noreferrer noopener'}>
                Read.cv
              </NavLink>
            </NavMenuInner>
          </NavMenuContent>
        </NavigationMenu.Item>
        {/* <!-- END !  "Connect" Menu --> */}
      </NavMenuBar>

      <Viewport>
        <NavMenuViewport />
      </Viewport>
    </NavMenuRoot>
  );
};

AtlrNavbar.displayName = 'AtlrNavbar';
