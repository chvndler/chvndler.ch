import { Meta } from '@/components/common/meta';
import { PageLayout } from '@/components/layout/page';
import { ProjectCarousel } from '@/components/primitives/carousel';

// RENDER APP©...
const TestPage = () => {
  return (
    <>
      <PageLayout>
        <Meta />
        <ProjectCarousel />
      </PageLayout>
    </>
  );
};

export default TestPage;
