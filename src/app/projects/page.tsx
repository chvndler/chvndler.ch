import { allProjects } from 'contentlayer/generated';
import type { Projects } from 'contentlayer/generated';
import type { Metadata } from 'next/types';

import { formatDateTime } from '../../lib/hooks/use-date-time';
import { compareDesc } from 'date-fns';
import ProjectGrid from '../../components/layout/project';

export const metadata: Metadata = {
  title: 'Chandler Ch - Projects',
  description: 'Projects I have worked on, and am currently working on.',
};

interface ProjectListProps {
  post: Projects;
}

// const projectOrder = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

export default function ProjectsIndex() {
  const projectOrder = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <section className="pv-3 py-10">
        <h3 className="text-zinc8 mb-2 font-inter text-2xl font-normal tracking-tighter">
          Some of my <span className="font-semibold">work</span>.
        </h3>
      </section>
      <ProjectGrid />

      {/* <!--
      <div className='flex flex-wrap justify-center w-full mx-auto -mb-4'>
        {projectOrder.map((post) => (
          <div key={post._id} className='w-full px-2 mb-4 sm:w-1/2 md:w-1/2'>
            <Link href={post.url}>
              {post.image && (
                <div className='aspect-ratio aspect-ratio--16x9 mb2'>
                  <Image
                    className='border aspect-video rounded-2xl border-grayscale-600 hover:rounded-lg'
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                  />
                </div>
              )}
            </Link>

            <div className='flex items-baseline justify-between py-3 mx-auto'>
              <h2 className='font-medium text-left font-inter'>{post.title}</h2>
              <FormattedDate post={post} />
            </div>
          </div>
        ))}
      </div>
      --> */}
    </>
  );
}

function FormattedDate({ post }: ProjectListProps) {
  const publishedDate = formatDateTime(post.date);

  return <p className="text-right font-fraktion text-xs font-[460]">{publishedDate.asString}</p>;
}
