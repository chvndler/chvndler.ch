import type {PostType} from '../../pages/archive/post'

export interface ArchiveMetaProps
  extends Pick<PostType, 'date' | 'description' | 'image' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string
}
