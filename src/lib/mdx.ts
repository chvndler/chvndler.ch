import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';
import remarkSlug from 'remark-slug';

import type { Frontmatter } from '../ts/frontmatter';

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, 'src/data');

// the front matter and content of all mdx files based on `docsPaths`
export const getAllFrontmatter = (fromPath: string) => {
  const PATH = path.join(DATA_PATH, fromPath);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths.map((filePath) => {
    const source = fs.readFileSync(path.join(filePath), 'utf8');
    const { data } = matter(source);

    return {
      ...(data as Frontmatter),
      slug: filePath.replace(`${DATA_PATH}/`, '').replace('.mdx', '')
    } as Frontmatter;
  });
};

export const getMdxBySlug = async (basePath: string, slug: any) => {
  const source = fs.readFileSync(path.join(DATA_PATH, basePath, `${slug}.mdx`), 'utf8');
  const { frontmatter, code } = await bundleMDX(source, {
    xdmOptions(input: any, options: { remarkPlugins: any[]; rehypePlugins: any[] }) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug];

      return options;
    }
  });

  return {
    frontmatter: {
      ...(frontmatter as Frontmatter),
      slug
    } as Frontmatter,
    code
  };
};

export function getAllVersionsFromPath(fromPath: string) {
  const PATH = path.join(DATA_PATH, fromPath);
  if (!fs.existsSync(PATH)) return [];
  return fs
    .readdirSync(PATH)
    .map((fileName) => fileName.replace('.mdx', ''))
    .reverse();
}
