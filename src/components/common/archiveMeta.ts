/** @format */

import type {PostType} from '@/lib/types/post'

export interface ArchiveMetaProps
 extends Pick<PostType, 'date' | 'description' | 'image' | 'title'> {
 /**
  * For the meta tag `og:type`
  */
 type?: string
}
