import { UseFullViewport } from '@/components/common/viewport/alt';
import { AppBar } from '@/components/layout/app-bar';

type LayoutProps = {
  children?: React.ReactNode;

  // TODO after implementing header, footer
  // headerProps?: HeaderProps
  // footerProps?: FooterProps
};

export const PageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <UseFullViewport>
        <AppBar />
        <main>{children}</main>
      </UseFullViewport>
    </>
  );
};
