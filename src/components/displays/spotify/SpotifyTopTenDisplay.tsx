import {Section} from '@/components/ds'

import {TrackCards} from './track.card'
/**
 *
 * @render - project grid component.
 *
 */

export const SpotifyTopTenDisplay = () => {
  return (
    <Section size={'4'}>
      <TrackCards />
    </Section>
  )
}

SpotifyTopTenDisplay.displayName = 'SpotifyTopTenDisplay'
