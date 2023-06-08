import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import type { ComputedFields } from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// computed.fields

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (ject) => `/${ject._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (ject) => ject._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  url: {
    type: 'string',
    description: 'The URL of the post, e.g. /projects/my-post',
    resolve: (ject) => `/${ject._raw.flattenedPath}`,
  },
};

// make source

export const Projects = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    /**
     *
     * title - the title of the post.
     */
    title: {
      type: 'string',
      required: true,
    },
    /**
     *
     * description - the description of the post.
     */
    description: {
      type: 'string',
    },
    /**
     *
     * excerpt - the excerpt of the post.
     */
    excerpt: {
      type: 'string',
    },
    /**
     *
     * date - the publish date of the post.
     */
    date: {
      type: 'date',
      required: true,
    },
    /**
     *
     * key - the key, label, or order of the post.
     */
    key: {
      type: 'string',
      required: false,
      description: 'The key, label, or order of the post',
    },
    /**
     *
     * git - the projects GitHub link, if available.
     */
    git: {
      type: 'string',
      required: false,
    },
    /**
     *
     * tags - a list of keywords that relate to the post.
     */
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'A list of keywords that relate to the post',
      required: true,
    },
    /**
     *
     * image - the main image for the post.
     */
    image: {
      type: 'string',
      required: false,
      description: 'The main image for the post',
    },
  },
  computedFields,
}));

/*
const rehypePrettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
  tokensMap: {
    fn: 'entity.name.function',
    objKey: 'meta.object-literal.key',
  },

  //
}
*/

export default makeSource({
  contentDirPath: './collection',
  documentTypes: [Projects],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          // theme: 'one-dark-pro',
          onVisitLine(node: { children: string | any[] }) {
            /**
             *
             * Prevent lines from collapsing in `display: grid`
             * mode, and allow empty lines to be copied properly.
             */
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: '' }];
            }
          },
          onVisitHighlightedLine(node: { properties: { className: string[] } }) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: { properties: { className: string[] } }) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
