import { clsx as stylx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(stylx(inputs));
}

export function clsx(...inputs: ClassValue[]) {
  return twMerge(stylx(inputs));
}

export const formatAddress = ({ address }: { address: string }) => {
  const chars = address.split('');

  return `${chars.slice(0, 6).join('')}…${chars.slice(-6).join('')}`;
};

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}
