import { CDCLogo } from '@/components/logos/cdc';
import { PassLink } from '@/components/primitives/pass-link';

import { AppNav, ContentBox, NavButton, NavContainer } from './s';

export const AppBarDisabled = () => {
  return (
    <>
      <NavContainer>
        <AppNav>
          <ContentBox alignment="start">
            <NavButton href="/projects">Projects</NavButton>
          </ContentBox>

          <ContentBox alignment="center">
            <PassLink href="/ch">
              <CDCLogo />
            </PassLink>
          </ContentBox>

          <ContentBox alignment="end">
            <NavButton href="/notes">Notes</NavButton>
          </ContentBox>
        </AppNav>
      </NavContainer>
    </>
  );
};
