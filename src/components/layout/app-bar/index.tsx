import { PassLink } from '@/components/ds';
import { CDCLogo } from '@/components/logos/cdc';

import { AppNav, ContentBox, NavButton, NavContainer } from './s';

export const AppBar = () => {
  return (
    <>
      <NavContainer>
        <AppNav>
          <ContentBox alignment="start">
            <NavButton href="/projects">Projects</NavButton>
          </ContentBox>

          <ContentBox alignment="center">
            <PassLink href="/">
              <CDCLogo />
            </PassLink>
          </ContentBox>

          <ContentBox alignment="end">
            <NavButton href="/connect">Connect</NavButton>
          </ContentBox>
        </AppNav>
      </NavContainer>
    </>
  );
};
