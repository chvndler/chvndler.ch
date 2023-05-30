import { request, gql } from 'graphql-request';

/// Gets a list of transaction IDs for the given contributor address.
/// Transactions are pulled from the Arweave GraphQL endpoint.
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

  const ids = txnData.transactions.edges.map((edge: any) => {
    return edge.node.id;
  });

  return ids;
};

export const getTxnIdsByDigest = async (digest: string, limit: number) => {
  const endpoint = 'https://arweave.net/graphql';

  const query = gql`
    query MirrorPosts($digest: String!, $limit: Int) {
      transactions(
        tags: [
          { name: "App-Name", values: ["MirrorXYZ"] }
          { name: "Original-Content-Digest", values: [$digest] }
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

/*
Content-Type: application/json
App-Name: MirrorXYZ
Contributor: 0x7944425BC5118604ee369bA8B3C41cABb5C9D379
Content-Digest: 7T1belecvP6r11FfTz_Y9Lkrv3SFfne0u_Q9950qI5w
Original-Content-Digest: 2CKn941wM3aTVxjIEWcnd3E1A-qDiRW6LXZTXHmgb1U
*/

// GraphQL query to get the Arweave transaction ID of a Mirror post
// With the transaction ID we can use `getData()` from the Arweave JS SDK, eg.
// arweave.transactions.getData('bNbA3TEQVL60xlgCcqdz4ZPHFZ711cZ3hmkpGttDt_U').then(data => { console.log(data); });

// We can use the explorer at https://arweave.net/graphql, which queries https://arweave.net/graphql to test it out
// With the transaction ID we can go to the URL `arweave.net/<YOUR_TRANSACTION_ID>` which will render the JSON
// More details on how this works on https://dev.mirror.xyz/GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw

// Query to get the transaction ID of a Mirror post by the content digest
// This is useful for getting the transaction ID of a post that was published by a contributor

/*
# Write your query or mutation here

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
*/

////import { getMirrorPostsByContributor } from './getPosts';
//const myAddress = "0xeD98464BDA3cE53a95B50f897556bEDE4316361c"
//const limit = 1

//async function main() {
//	const posts = await getMirrorPostsByContributor(myAddress, limit);
//	console.log('\nresults')
//	console.log(posts.map((post: any) => { return post.content.title }));
//}

export const getTXNIDsDigest = async (digest: string, limit: number) => {
  const endpoint = 'https://arweave.net/graphql';
  const getTxns = gql`
    query GetMirrorTransactions($digest: String!) {
      transactions(
        tags: [
          { name: "App-Name", values: ["MirrorXYZ"] }
          { name: "Original-Content-Digest", values: [$digest] }
        ]
        sort: HEIGHT_DESC
        first: 1
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
    digest: digest,
    limit: limit,
  };

  console.log('getting ids for content digest ' + digest + '...');

  const txnData = await request(endpoint, getTxns, vars);

  const ids = txnData.transactions.edges.map((edge: any) => {
    return edge.node.id;
  });

  return ids;
};

/**
 *
 * @param digest
 * @param limit
 * @returns ids of transactions with the same content digest
 *
 * @example https://arweave.net/query?query_id=2CKn941wM3aTVxjIEWcnd3E1A-qDiRW6LXZTXHmgb1U
 */
export const getExampleDigest = async (digest: string, limit: number) => {
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
