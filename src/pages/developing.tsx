import { AboutMe } from '@/components/common/about-header';
import { AppFooter } from '@/components/layout/app-footer';
import { PageLayout } from '@/components/layout/page';
import { TimePlusCursorData } from '~/components/primitives/time-x-cursor-data';

const DevelopingPage = () => {
  return (
    <>
      <PageLayout>
        <TimePlusCursorData />
        {/* <!-- HERO CONTAINER --> */}
        <AboutMe />

        {/*END HERO CONTAINER*/}
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default DevelopingPage;
