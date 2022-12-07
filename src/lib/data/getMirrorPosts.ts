import Arweave from 'arweave';

import { arweaveIds, digestIds } from './getIds';

/**
 * Initialize Arweave client.
 */
const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

/**
 * Get Arweave transaction data..
 */
const getTransactionData = async (id: string) => {
  // eslint-disable-next-line no-console
  console.log('getting data for id ' + id);
  const result = (await arweave.transactions.getData(id, { decode: true, string: true })) as string;
  const json = JSON.parse(result);
  return json as MirrorPost;
};

// Gets a list of posts with a `contributor` tag matching the given address
/**
 *
 * @param address
 * @param limit
 * @returns posts as `MirrorPost[]`
 */
const getPostsByContributor = async (address: string, limit: number) => {
  const ids = await arweaveIds(address, limit);

  const uniquePosts: any = {};
  for (const id of ids) {
    const json = await getTransactionData(id);
    uniquePosts[json.originalDigest] = json;
  }

  const posts: any[] = Object.values(uniquePosts);
  return posts as MirrorPost[];
};

/**
 * Gets list of posts with an `Original-Content-Digest` matching the given digest
 * (i.e. gets a specific post by its unique identifier).
 */
const getPostByDigest = async (digest: string, limit: number) => {
  const ids = await digestIds(digest, limit);

  const uniquePosts: any = {};
  for (const id of ids) {
    const json = await getTransactionData(id);
    uniquePosts[json.originalDigest] = json;
  }

  const posts: any[] = Object.values(uniquePosts);
  return posts as MirrorPost[];
};

type MirrorPost = {
  content: {
    body: string;
    title: string;
    timestamp: number;
  };
  digest: string;
  version: string;
  originalDigest: string;
  nft: any;
  authorship: {
    signature: string;
    contributor: string;
  };
};

export const getArweaveTXData = getTransactionData;
export const getMirrorPostByDigest = getPostByDigest;
export const getMirrorPostByContributor = getPostsByContributor;

export type Entry = MirrorPost;
