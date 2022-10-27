import { ProjectLayout } from './ProjectLayout';
import { ProjectScope } from './s';

export const Projects = () => {
  return (
    <>
      <ProjectLayout>
        <ProjectScope
          projectTitle="Atelier® Design"
          projectSummary="A styled & accessible React component library."
          projectUrl="https://github.com"
        />

        <ProjectScope
          projectTitle="Atlr® Color"
          projectSummary="A quickly accessible, yielded and opinionated color system."
          projectUrl="https://github.com"
        />

        <ProjectScope
          projectTitle="Atlr® Icxns"
          projectSummary="Not your basic iconset."
          projectUrl="https://github.com"
        />

        <ProjectScope
          projectTitle="typesxript"
          projectSummary="A beginning point for everything you need to build cool shit."
          projectUrl="https://github.com"
        />
      </ProjectLayout>
    </>
  );
};
