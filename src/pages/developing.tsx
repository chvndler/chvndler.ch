import { Projects } from '@/components/common/project-scope';
import { AppFooter } from '@/components/layout/app-footer';
import { PageLayout } from '@/components/layout/page';
import { TimePlusCursorData } from '~/components/primitives/time-x-cursor-data';

const DevelopingPage = () => {
  return (
    <>
      <PageLayout>
        <TimePlusCursorData />
        <Projects />
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default DevelopingPage;
