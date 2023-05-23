import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import type {ComputedFields} from 'contentlayer/source-files'

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
}

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
    tags: {
      type: 'list',
      of: {type: 'string'},
      description: 'A list of keywords that relate to the post',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
      description: 'The main image for the post',
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './collection',
  documentTypes: [Projects],
})