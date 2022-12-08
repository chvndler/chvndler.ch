import {Box, PassLink} from '@/components/ds'
import type {Entry} from '@/lib/data/getMirrorPosts'
import {formatAddress} from '@/lib/utils/address'

type MirrorProps = {
  entry: Entry
}

export const MirrorFooter = ({entry}: MirrorProps) => {
  return (
    <>
      <Box>
        <footer>
          {entry.digest && (
            <a
              href={`https://viewblock.io/arweave/tx/${entry.digest}`}
              target="_blank"
              rel="noreferrer">
              <div>
                <p>Arweave TX</p>
                <p>&rarr;</p>
              </div>
              <p>{formatAddress(entry.digest)}</p>
            </a>
          )}
          <PassLink
            href={`https://etherscan.io/address/${entry.digest}`}
            target="_blank"
            rel="noreferrer">
            <div>
              <p>Ethereum Address</p>
              <p>&rarr;</p>
            </div>
            <p>{formatAddress(entry.originalDigest)}</p>
          </PassLink>
          <div>
            <p>Content Digest</p>
            <p>{formatAddress(entry.originalDigest)}</p>
          </div>
        </footer>
      </Box>
    </>
  )
}
