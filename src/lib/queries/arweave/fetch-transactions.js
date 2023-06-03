import { gql } from '@apollo/client';

export default gql`
  query FetchTransactions($addresses: [String!]!) {
    transactions(
      first: 100
      tags: [
        { name: "App-Name", values: ["MirrorXYZ"] }
        { name: "Contributor", values: $addresses }
      ]
    ) {
      edges {
        node {
          id
          block {
            timestamp
          }
          tags {
            name
            value
          }
        }
      }
    }
  }
`;

// query variables
let addresses = [''];

client.query({
  transactions: {
    __args: {
      first: 100,
      tags: [
        { name: 'App-Name', values: ['MirrorXYZ'] },
        { name: 'Contributor', values: addresses },
      ],
    },
    edges: {
      node: {
        id: true,
        block: {
          timestamp: true,
        },
        tags: {
          name: true,
          value: true,
        },
      },
    },
  },
});
