import { PageLayout } from '@/components/layout/page';
import { AppFooter } from '~/components/layout/app-footer';
import { TimePlusCursorData } from '~/components/primitives/time-x-cursor-data';

const Home = () => {
  return (
    <>
      <PageLayout>
        <TimePlusCursorData />
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default Home;
