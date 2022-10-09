import React from 'react';

import { Code } from '@/components/ds/text';
import type { Frontmatter } from '~/ts/frontmatter';

export const components = {
  Code: Code
};

export const FrontmatterContext = React.createContext<Frontmatter>({} as any);

// Custom provider for next-mdx-remote
// https://github.com/hashicorp/next-mdx-remote#using-providers
export function MDXProvider(props: { frontmatter: any; children: any }) {
  const { frontmatter, children } = props;
  return <FrontmatterContext.Provider value={frontmatter}>{children}</FrontmatterContext.Provider>;
}
