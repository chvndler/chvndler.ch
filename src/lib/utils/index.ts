import {isClient} from '@/lib/constants'

export const formatError = (error: unknown): {message: string; name?: string} => {
  try {
    if (error instanceof Error) {
      return {message: error.message, name: error.name}
    }
    return {message: String(error)}
  } catch (error) {
    return {message: 'An unknown error ocurred.'}
  }
}

export const isApiSupported = (api: string) => isClient && api in window

/* Builds responsive sizes string for images */
export const getSizes = (entries: ({breakpoint: string; width: string} | string | number)[]) => {
  const sizes = entries.map((entry) => {
    if (!entry) {
      return ''
    }

    if (typeof entry === 'string') {
      return entry
    }

    if (typeof entry === 'number') {
      return `${entry}px`
    }

    if (entry.breakpoint.includes('px') || entry.breakpoint.includes('rem')) {
      return `(min-width: ${entry.breakpoint}) ${entry.width}`
    }

    throw new Error(`Invalid breakpoint: ${entry.breakpoint}`)
  })

  return sizes.join(', ')
}

export function download(url: string) {
  //iOS devices do not support downloading. We have to inform user about this.
  if (/(iP)/g.test(navigator.userAgent)) {
    alert('Your device does not support files downloading. Please try again in desktop browser.')
    return false
  }

  const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1
  const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1

  //If in Chrome or Safari - download via virtual link click
  if (isChrome || isSafari) {
    //Creating new link node.
    const link = document.createElement('a')
    link.href = url

    if (link.download !== undefined) {
      //Set HTML5 download attribute. This will prevent file from opening if supported.
      const fileName = url.substring(url.lastIndexOf('/') + 1, url.length)
      link.download = fileName
    }

    //Dispatching click event.
    if (document.createEvent) {
      const e = document.createEvent('MouseEvents')
      e.initEvent('click', true, true)
      link.dispatchEvent(e)
      return true
    }
  }

  // Force file download (whether supported by server).
  if (url.indexOf('?') === -1) {
    url += '?download'
  }

  window.open(url, '_self')
  return true
}

export const range = (start: number, stop?: number, step?: number) => {
  if (typeof stop === 'undefined') {
    stop = start
    start = 0
  }

  if (typeof step === 'undefined') {
    step = 1
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return []
  }

  const result = []
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i)
  }

  return result
}
