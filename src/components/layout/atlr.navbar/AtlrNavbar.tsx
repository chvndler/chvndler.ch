import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import React from 'react'

import {PassLink} from '@/components/ds'
import {CDCLogo} from '@/components/logos'

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
  Viewport,
} from './AtlrNavbar.styles'

/**
 * @ConnectLinks
 */
const cv = 'https://s3.amazonaws.com/truth.cloud/cv/ChandlerChappell_cv.pdf'
const twitter = 'https://twitter.com/chvndlerch'
const github = 'https://github.com/chvndler'
const linkedin = 'https://www.linkedin.com/in/chvndler/'
const code_sandbox = 'https://codesandbox.io/u/chvndler'
const instagram = 'https://instagram.com/chv.ndler'
const are_na = 'https://www.are.na/chvndler-ch'
const read_cv = 'https://read.cv/chvn'

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
              <NavLink href={'/'}>index</NavLink>
              <NavLink href={'/projects/web'}>web projects</NavLink>
              <NavLink href={'/projects/three'}>three.js</NavLink>
              <NavLink href={'/archive'}>articles archive</NavLink>
              <NavLink level2 href={'developer/notes'}>
                notes
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
              <NavLink href={cv} target={'_blank'} rel={'noreferrer noopener'}>
                resume/cv
              </NavLink>
              <NavLink href={twitter} target={'_blank'} rel={'noreferrer noopener'}>
                twitter
              </NavLink>
              <NavLink href={github} target={'_blank'} rel={'noreferrer noopener'}>
                github
              </NavLink>
              <NavLink href={linkedin} target={'_blank'} rel={'noreferrer noopener'}>
                linkedin
              </NavLink>
              <NavLink href={code_sandbox} target={'_blank'} rel={'noreferrer noopener'}>
                codesandbox
              </NavLink>
              <NavLink href={instagram} target={'_blank'} rel={'noreferrer noopener'}>
                instagram
              </NavLink>
              <NavLink href={are_na} target={'_blank'} rel={'noreferrer noopener'}>
                are.na
              </NavLink>
              <NavLink href={read_cv} target={'_blank'} rel={'noreferrer noopener'}>
                read.cv
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
  )
}

AtlrNavbar.displayName = 'AtlrNavbar'
