import { getEntries } from '@/lib/data/entries';

export default async (
  { query: { slug } }: any,
  res: { setHeader: (arg0: string, arg1: string) => void; redirect: (arg0: number, arg1: string) => any }
) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400');

  if (!slug) return res.redirect(308, '/');

  const entry = (await getEntries()).filter((entry: { slug: any }) => entry.slug === slug)?.[0];

  if (!entry) return res.redirect(308, '/');

  return res.redirect(308, `/${entry.transaction}`);
};
