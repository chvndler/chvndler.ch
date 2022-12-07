import { getEntries } from '@/lib/data/entries';

export default async (
  { headers: { host } }: any,
  res: { setHeader: (arg0: string, arg1: string) => void; json: (arg0: any) => any }
) => {
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  return res.json(
    (await getEntries()).map((entry: { slug: any }) => ({ ...entry, url: `https://${host}/post/${entry.slug}` }))
  );
};
