import {siteURL} from '@/lib/constants'

export type QueryParams = {[key: string]: string | null}

export const checkIsExternal = (href: string) => {
  if (!href.startsWith('http://') && !href.startsWith('https://')) return false
  const url = new URL(href)
  return url.hostname !== siteURL.hostname
}
