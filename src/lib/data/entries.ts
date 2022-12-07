import slug from 'slug';

import arweave from '@/lib/arweave';
import { arweaveQL } from '@/lib/graphQl';
import fetchSingleTransaction from '@/lib/queries/arweave/fetch-single-transaction';
import fetchTransactions from '@/lib/queries/arweave/fetch-transactions';
import { calculateSizes } from '@/lib/utils/mirror.images';

// import { contributorAddresses } from './ens';

type EdgeProps = {
  node?: {
    id?: string;
    block: {
      timestamp?: number;
    };
    tags: {
      name?: string;
      value?: string;
    }[];
  };
};

/**
///////////////////////////////////////////////////////////////
///// . GET ENTY PATHS /////                                ///
///////////////////////////////////////////////////////////////
 */
export const getEntryPaths = async () => {
  const {
    data: {
      transactions: { edges }
    }
  } = await arweaveQL.query({ query: fetchTransactions, variables: { addresses: null } });

  return edges
    .map(({ node }: EdgeProps) => {
      /**
       * This is where App_Name: Mirror is set
       * and the Digest Value is set
       */
      const tags = Object.fromEntries(node.tags.map((tag: { name: any; value: any }) => [tag.name, tag.value]));

      return { slug: tags['Original-Content-Digest'], path: node.id, timestamp: node.block.timestamp };
    })

    .filter((entry: { slug: string }) => entry.slug && entry.slug !== '')
    .reduce((acc: any[], current: { slug: any; timestamp: any }) => {
      const x = acc.findIndex((entry) => entry.slug === current.slug);
      if (x == -1) return acc.concat([current]);
      else {
        acc[x].timestamp = current.timestamp;

        return acc;
      }
    }, []);
};

/**
///////////////////////////////////////////////////////////////
///// . GET ENTRIES/////                                ///
///////////////////////////////////////////////////////////////
 */
export const getEntries = async () => {
  const paths = await getEntryPaths();

  return (
    await Promise.all(
      paths.map(async (entry: { path: string; slug: any; timestamp: number }) =>
        formatEntry(
          JSON.parse(await arweave.transactions.getData(entry.path, { decode: true, string: true })),
          entry.slug,
          entry.timestamp
        )
      )
    )
  )
    .sort((a, b) => b.timestamp - a.timestamp)
    .reduce((acc, current) => {
      const x = acc.find((entry: { slug: any }) => entry.slug === current.slug);
      if (!x) return acc.concat([current]);
      else return acc;
    }, []);
};

/**
///////////////////////////////////////////////////////////////
///// . GET ENTRY                              ///
///////////////////////////////////////////////////////////////
 */
export const getEntry = async (digest: any) => {
  const {
    data: {
      transactions: {
        edges: {
          0: {
            node: {
              id: transactionId,
              block: { timestamp }
            }
          }
        }
      }
    }
  } = await arweaveQL.query({ query: fetchSingleTransaction, variables: { digest } });

  return formatEntry(
    JSON.parse(await arweave.transactions.getData(transactionId, { decode: true, string: true })),
    transactionId,
    timestamp
  );
};

/**
///////////////////////////////////////////////////////////////
///// . Format the Entry                                   ///
/////////////////////////////////////////////////////////////
 */

const formatEntry = async (
  /**
   * ENTRY FORMAT
   */
  entry: {
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
  },
  transactionId: any,
  timestamp: any
) => ({
  title: entry.content.title,
  slug: slug(entry.content.title),
  body: entry.content.body,
  timestamp,
  digest: entry.originalDigest ?? entry.digest,
  contributor: entry.authorship.contributor,
  transaction: transactionId,
  cover_image:
    (entry.content.body.split('\n\n')[0].match(/!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/m) || [])?.[1] || null,
  image_sizes: await calculateSizes(entry.content.body)
});
