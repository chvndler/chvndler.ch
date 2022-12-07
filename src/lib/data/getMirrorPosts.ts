import Arweave from 'arweave';

import { arweaveIds, digestIds } from './getIds';

// An Arweave object using the public arweave.net endpoint
const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

// Gets Arweave transaction data for the given transaction ID
const getTransactionData = async (id: string) => {
  // eslint-disable-next-line no-console
  console.log('getting data for id ' + id);
  const result = (await arweave.transactions.getData(id, { decode: true, string: true })) as string;
  const json = JSON.parse(result);
  return json as MirrorPost;
};

// Gets a list of posts with a `contributor` tag matching the given address
const getPostsByContributor = async (address: string, limit: number) => {
  // get the transaction ids for the addy
  const ids = await arweaveIds(address, limit);

  // get the data for the ids and unique the results bv digest
  const uniquePosts: any = {};
  for (const id of ids) {
    const json = await getTransactionData(id);
    uniquePosts[json.originalDigest] = json;
  }

  // return just an array of the post objects, not the table indexed by digests
  const posts: any[] = Object.values(uniquePosts);
  return posts as MirrorPost[];
};

// Gets a list of posts with an `original content digest` matching the given digest (i.e. gets a specific post by its unique identifier)
const getPostByDigest = async (digest: string, limit: number) => {
  // get the transaction ids for the addy
  const ids = await digestIds(digest, limit);

  // get the data for the ids and unique the results bv digest
  const uniquePosts: any = {};
  for (const id of ids) {
    const json = await getTransactionData(id);
    uniquePosts[json.originalDigest] = json;
  }

  // return just an array of the post objects, not the table indexed by digests
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
