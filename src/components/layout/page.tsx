import { AtlrNavbar } from '@/components/layout/atlr.navbar';

import { Meta } from '../common/meta';
import { CoverFooter } from './app-footer';
import { AlternateFooter } from './app-footer/alternate-footer';
import { RelativeFooter } from './app-footer/relative-footer';
import { BodyContainer } from './body-container';

type LayoutProps = {
  children?: React.ReactNode;
  page_type?: PageVariant;

  /**
   * @notes
   *
   * I needed a way to alternate different
   * page styles - depending on different components neeeded.
   *
   * So i'm playing with this @if (page_type ===) option.
   */
};

export type PageVariant = 'Production' | 'App' | 'CoverPage' | 'Developing' | 'RemoveFooter';
export const PageLayout = ({ children, page_type }: LayoutProps) => {
  /**
   * @ProductionVariant
   */
  if (page_type === 'Production') {
    return (
      <>
        <Meta />
        <AtlrNavbar />
        <BodyContainer>
          <main>{children}</main>
        </BodyContainer>
        <RelativeFooter />
      </>
    );
  }

  /**
   * @App
   * _ Removes "BodyContainer"
   * _ Because we use a "FixedCanvas" component.
   */
  if (page_type === 'App') {
    return (
      <>
        <Meta />
        <AtlrNavbar />
        <main>{children}</main>
        <CoverFooter />
      </>
    );
  }

  /**
   * @CoverPageVariant
   */
  if (page_type === 'CoverPage') {
    return (
      <>
        <Meta />
        <AtlrNavbar />
        <BodyContainer>
          <main>{children}</main>
        </BodyContainer>
        <CoverFooter />
      </>
    );
  }

  /**
   * @CoverPageVariant
   */
  if (page_type === 'Developing') {
    return (
      <>
        <Meta />
        <AtlrNavbar />
        <BodyContainer>
          <main>{children}</main>
        </BodyContainer>
        <AlternateFooter />
      </>
    );
  }

  /**
   * @RemoveFooterVariant
   */
  if (page_type === 'RemoveFooter') {
    return (
      <>
        <Meta />
        <AtlrNavbar />
        <BodyContainer>
          <main>{children}</main>
        </BodyContainer>
      </>
    );
  }

  /**
   *
   * @if no page_type provided...
   * default = ProductionVariant...
   *
   * @return ProductionVariant
   */
  return (
    <>
      <>
        <Meta />
        <AtlrNavbar />
        <BodyContainer>
          <main>{children}</main>
        </BodyContainer>
        <RelativeFooter />
      </>
    </>
  );
};
