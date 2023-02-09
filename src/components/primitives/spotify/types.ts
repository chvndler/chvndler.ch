/** @format */

export type TopTracks = {
  tracks: Song[]
}

type Track = {
  tracks: Song[]
}

export type Song = {
  songUrl: string
  artist: string
  title: string
}

export type NowPlayingSong = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export type TrackProps = {
  ranking?: number
  title?: string
  artist?: string
  songUrl?: string
  albumImageUrl?: string
}

export type {Track}
