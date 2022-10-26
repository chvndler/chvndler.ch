import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    date: { type: 'date', description: 'The date of the post', required: true }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`
    },
    slug: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`
    }
  }
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post]
});
