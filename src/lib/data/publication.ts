import { getConfig } from '@/hooks/use-ens-domain';
import { mirrorQL } from '@/lib/graphQl';
import fetchPublication from '@/lib/queries/mirror/fetch-publication';

export const getPublication = async () => {
  const { publicationAddress } = getConfig();

  const {
    data: { projectFeed: publication }
  } = await mirrorQL.query({ query: fetchPublication, variables: { publicationAddress } });

  return publication;
};
