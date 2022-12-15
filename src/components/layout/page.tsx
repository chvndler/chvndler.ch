/** @format */

import {BodyContainer} from '@/components/ds'
import {AtlrNavbar} from '@/components/layout/atlr.navbar'

import {Meta} from '../common/meta'
import {AppWrapper} from '../ds/app-wrapper'
import {CoverFooter} from './app-footer'
import {RelativeFooter} from './app-footer/relative-footer'

type LayoutProps = {
 children?: React.ReactNode
 page_type?: PageVariant

 /**
  * @notes
  */
 // I needed a way to alternate different
 // page styles - depending on different components neeeded.
 // So i'm playing with this @if (page_type ===) option.
}

export type PageVariant = 'Production' | 'App' | 'CoverPage' | 'RemoveFooter'
export const PageLayout = ({children, page_type}: LayoutProps) => {
 // Production...
 if (page_type === 'Production') {
  return (
   <>
    <Meta />
    <AtlrNavbar />
    <AppWrapper>
     <BodyContainer>
      <main>{children}</main>
     </BodyContainer>
     <RelativeFooter />
    </AppWrapper>
   </>
  )
 }

 // App...
 if (page_type === 'App') {
  return (
   <>
    <Meta />
    {/* <!-- <AtlrNavbar /> --> */}
    <AppWrapper>
     <main>{children}</main>
    </AppWrapper>
    <CoverFooter />
   </>
  )
 }

 // CoverPage...
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
  )
 }

 // RemoveFooter...
 if (page_type === 'RemoveFooter') {
  return (
   <>
    <Meta />
    <AtlrNavbar />
    <BodyContainer>
     <main>{children}</main>
    </BodyContainer>
   </>
  )
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
 )
}
