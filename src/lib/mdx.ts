import * as React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import MuxPlayer from '@mux/mux-player-react/lazy';
import type { MuxPlayerProps } from '@mux/mux-player-react';

type MDXImageProps = {
  alt: string;
  className?: string;
} & React.ComponentProps<typeof NextImage>;

type MDXLinkProps = {
  className?: string;
} & React.ComponentProps<typeof NextLink>;

type MDXVideoProps = {
  className?: string;
  id?: MuxPlayerProps['playbackId'];
} & React.ComponentProps<typeof MuxPlayer>;

interface IFrameProps {
  src: string;
}

/**
 *
 *
 * types
 */

export type { MDXImageProps, MDXLinkProps, MDXVideoProps, IFrameProps };
