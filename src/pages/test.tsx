import { Meta } from '@/components/common/meta';
import { Section } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { AtlrDsLogo } from '@/components/logos';
import { ProjectDisplay } from '@/components/primitives/project-display';
import { GridStyle } from '@/components/primitives/project-display/grid-style';
// RENDER APP©...
const TestPage = () => {
  return (
    <>
      <PageLayout>
        <Meta />

        <Section size={'4'}>
          <GridStyle>
            <ProjectDisplay projectUrl="https://" title="Project Title" description="Project Description">
              <AtlrDsLogo />
            </ProjectDisplay>
            <ProjectDisplay projectUrl="https://" title="Project Title" description="Project Description">
              <AtlrDsLogo />
            </ProjectDisplay>
            <ProjectDisplay projectUrl="https://" title="Project Title" description="Project Description">
              <AtlrDsLogo />
            </ProjectDisplay>
          </GridStyle>
        </Section>
      </PageLayout>
    </>
  );
};

export default TestPage;
