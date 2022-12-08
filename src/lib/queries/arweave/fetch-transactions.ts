import {gql} from '@apollo/client'

export default gql`
  query GetMirrorTransactions($digest: String!) {
    transactions(
      tags: [
        {name: "App-Name", values: ["MirrorXYZ"]}
        {name: "Original-Content-Digest", values: [$digest]}
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
`

// GraphQL query to get the Arweave transaction ID of a Mirror post
// With the transaction ID we can use `getData()` from the Arweave JS SDK, eg.
// arweave.transactions.getData('bNbA3TEQVL60xlgCcqdz4ZPHFZ711cZ3hmkpGttDt_U').then(data => { console.log(data); });

// We can use the explorer at https://arweave.net/graphql, which queries https://arweave.net/graphql to test it out
// With the transaction ID we can go to the URL `arweave.net/<YOUR_TRANSACTION_ID>` which will render the JSON
// More details on how this works on https://dev.mirror.xyz/GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw

/**
{
  "digest": "2CKn941wM3aTVxjIEWcnd3E1A-qDiRW6LXZTXHmgb1U"
}
 */

/**
 * kfE3g0Hf8UQ71xfRe97ehrYodww-teRlTlO13thm5Bg
 */
