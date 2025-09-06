export type AniZip = {
  titles: Titles
  episodes: Episodes
  images: Image[]
  mappings: Mappings
  episodeCount: number
  specialCount: number
}

type Titles = Record<string, string>

type EpisodeTitle = Record<string, string>

export type Episode = {
  tvdbShowId: number
  tvdbId: number
  seasonNumber: number
  episodeNumber: number
  absoluteEpisodeNumber: number
  title: EpisodeTitle
  airDate: string
  airDateUtc: string
  runtime: number
  overview: string
  image?: string
  episode: string
  anidbEid: number
  length: number
  airdate: string
  rating: string
  summary: string
}

type EpisodesList = Record<string, Episode>

export type Episodes = EpisodesList & {
  episodeCount: number
  specialCount: number
}

type Image = {
  coverType: string
  url: string
}

type Mappings = {
  animeplanet_id: string
  kitsu_id: number
  mal_id: number
  type: string
  anilist_id: number
  anisearch_id: number
  anidb_id: number
  notifymoe_id: string
  livechart_id: number
  thetvdb_id: number
  imdb_id: string
  themoviedb_id: string
}
