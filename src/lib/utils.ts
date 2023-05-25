import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatAddress = ({address}: {address: string}) => {
  const chars = address.split('')

  return `${chars.slice(0, 6).join('')}…${chars.slice(-6).join('')}`
}
