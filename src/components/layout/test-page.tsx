import { AtlrNavbar } from '@/components/layout/atlr.navbar';

import { Meta } from '../common/meta';
import { BodyContainer } from './body-container';

type LayoutProps = {
  children?: React.ReactNode;
};

export const TestPageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <AtlrNavbar />
      <BodyContainer>
        <main>{children}</main>
      </BodyContainer>
    </>
  );
};
