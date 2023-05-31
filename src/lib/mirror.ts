import Arweave from 'arweave';
import { gql, request } from 'graphql-request';

export type MirrorPost = {
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

/**
 *
 *
 * set up arweave client
 */
const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https',
});

const contributorAddresses = '0x7944425BC5118604ee369bA8B3C41cABb5C9D379';

export const ensConfig = () => {
  return {
    ensDomain: 'chvndler.eth',
    publicationAddress: contributorAddresses[0],
  };
};

export const fetchPublication = gql`
  query PublicationInfo($publicationAddress: String!) {
    projectFeed(projectAddress: $publicationAddress) {
      displayName
      avatarURL
      domain
      headerImage {
        url
      }
      theme {
        colorMode
        accent
      }
      description
      mailingListURL
      members {
        address
        displayName
        avatarURL
      }
    }
  }
`;

export async function getMirrorPosts(id: string) {
  // get all transactions from the mirror contract
  const transactions = (await arweave.transactions.getData(id, {
    decode: true,
    string: true,
  })) as string;

  const json = JSON.parse(transactions);
  return json;
}

export async function getTransactionData(id: string) {
  // get the transaction data for the given id
  const transaction = await arweave.transactions.get(id);
  const data = transaction.get('data', { decode: true, string: true });
  const json = JSON.parse(data);
  return json;
}
/*
export const getMirrorPostsByContributor = async (address: string, limit: number) => {
  // get the transaction ids for the addy
  const ids = await getTxnIds(address, limit);

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


export const getMirrorPostByDigest = async (digest: string, limit: number) => {
  // get the transaction ids for the addy
  const ids = await getTxnIdsByDigest(digest, limit);

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

*/
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/*

export const getTxnIds = async (address: string, limit: number) => {
  const endpoint = 'https://arweave.net/graphql';

  const query = gql`
    query MirrorPosts($address: String!, $limit: Int) {
      transactions(
        tags: [
          { name: "App-Name", values: ["MirrorXYZ"] }
          { name: "Contributor", values: [$address] }
        ]
        sort: HEIGHT_DESC
        first: $limit
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `;

  const vars = {
    address: address,
    limit: limit,
  };

  console.log('getting ids for address ' + address + '...');
  const txnData = await request(endpoint, query, vars);

  console.log(txnData);
  const ids = txnData.transactions.edges.map((edge: any) => {
    return edge.node.id;
  });

  return ids;
};

export const getTxnIdsByDigest = async (digest: string, limit: number) => {
  const endpoint = 'https://arweave.net/graphql';

  const query = gql`
    query FetchTransaction($digest: String = "2CKn941wM3aTVxjIEWcnd3E1A-qDiRW6LXZTXHmgb1U") {
      transactions(
        tags: [
          { name: "Original-Content-Digest", values: [$digest] }
          { name: "App-Name", values: "MirrorXYZ" }
        ]
      ) {
        edges {
          node {
            id
            block {
              timestamp
            }
          }
        }
      }
    }
  `;

  const vars = {
    digest: digest,
    limit: limit,
  };

  console.log('getting ids for content digest ' + digest + '...');
  const txnData = await request(endpoint, query, vars);

  const ids = txnData.transactions.edges.map((edge: any) => {
    return edge.node.id;
  });

  return ids;
};
*/
