import Link from 'next/link';

export default function MediaIndex() {
  return (
    <>
      <section className="pv-3 py-10">
        <h3 className="text-zinc8 mb-2 font-inter text-2xl font-normal tracking-tighter">
          Play<span className="font-semibold">ground</span>.
        </h3>
      </section>

      <section className="pb-10">
        <div className="mx-auto -mb-4 flex w-full flex-wrap justify-start">
          {projects.map((project) => (
            <div
              key={project._id}
              className="w-full bg-blackA1 px-2 shadow-sminner hover:bg-blackA3 dark:bg-whiteA1 dark:hover:bg-whiteA3 sm:w-1/2 md:w-1/2"
            >
              <>
                <Link
                  key={project._id}
                  href={project.url}
                  className="font-archivo text-lg font-semibold tracking-tight text-blackA10 dark:text-whiteA10"
                >
                  {project.title}
                </Link>

                <p>{project.description}</p>
                <p>{project.excerpt}</p>
                <p>{new Date(project.date).toLocaleDateString()}</p>
              </>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const projects = [
  {
    title: 'Arie.js',
    description: 'Ocsasst.',
    excerpt: 'Tempor.',
    date: '2023-05-18T00:00:00.000Z',
    tags: ['design', 'scripts'],
    image: '/static/img/projects/arie.jpg',
    _id: 'projects/arie.mdx',
    _raw: {
      sourceFilePath: 'projects/arie.mdx',
      sourceFileName: 'arie.mdx',
      sourceFileDir: 'projects',
      contentType: 'mdx',
      flattenedPath: 'projects/arie',
    },
    type: 'Projects',
    slug: '/projects/arie',
    slugAsParams: 'arie',
    url: '/projects/arie',
  },
  {
    title: 'Atelier Kit',
    description: 'illum amet pariatur et.',
    excerpt: 'Tsse.',
    date: '2023-05-18T00:00:00.000Z',
    tags: ['design', 'scripts'],
    image: '/static/img/projects/arie.jpg',
    _id: 'projects/atelierkit.mdx',
    _raw: {
      sourceFilePath: 'projects/atelierkit.mdx',
      sourceFileName: 'arie.mdx',
      sourceFileDir: 'projects',
      contentType: 'mdx',
      flattenedPath: 'projects/arie',
    },
    type: 'Projects',
    slug: '/projects/atelierkit',
    slugAsParams: 'atelierkit',
    url: '/projects/atelierkit',
  },
];
