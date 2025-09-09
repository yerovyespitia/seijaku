import { Details, Jikan } from '@/types/jikan'
import { AniZip } from '@/types/zip'

const JIKAN_URL = 'https://api.jikan.moe/v4'
const ANIZIP_URL = 'https://api.ani.zip'

export const getAniZip = async (id: number) => {
  const res = await fetch(`${ANIZIP_URL}/mappings?anilist_id=${id}`)

  const data: AniZip = await res.json()

  return data
}

export const getPopulars = async (limit: number, page = 1) => {
  const res = await fetch(
    `${JIKAN_URL}/top/anime?page=${page}&limit=${limit}&sfw=true`,
  )

  const data: Jikan = await res.json()

  const seenIds = new Set()
  data.data = data.data.filter((anime) => {
    if (seenIds.has(anime.mal_id)) {
      return false
    }
    seenIds.add(anime.mal_id)
    return true
  })

  return data
}

export const getInfo = async (id: number) => {
  const res = await fetch(`${JIKAN_URL}/anime/${id}/full`)

  const data: Details = await res.json()

  return data
}

export const getTrending = async (limit: number, page = 1) => {
  const res = await fetch(
    `${JIKAN_URL}/top/anime?page=${page}&filter=airing&limit=${limit}&sfw=true&type=tv`,
  )
  const data: Jikan = await res.json()

  const seenIds = new Set()
  data.data = data.data.filter((anime) => {
    if (seenIds.has(anime.mal_id)) {
      return false
    }
    seenIds.add(anime.mal_id)
    return true
  })

  return data
}

export const getUpcoming = async (limit: number, page = 1) => {
  const res = await fetch(
    `${JIKAN_URL}/top/anime?page=${page}&limit=${limit}&sfw=true&filter=upcoming`,
  )

  const data: Jikan = await res.json()

  const seenIds = new Set()
  data.data = data.data.filter((anime) => {
    if (seenIds.has(anime.mal_id)) {
      return false
    }
    seenIds.add(anime.mal_id)
    return true
  })

  return data
}

export const getMostLiked = async (limit: number, page = 1) => {
  const res = await fetch(
    `${JIKAN_URL}/top/anime?page=${page}&limit=${limit}&sfw=true&filter=bypopularity`,
  )

  const data: Jikan = await res.json()

  const seenIds = new Set()
  data.data = data.data.filter((anime) => {
    if (seenIds.has(anime.mal_id)) {
      return false
    }
    seenIds.add(anime.mal_id)
    return true
  })

  return data
}

export const getHero = async (limit: number, page = 1) => {
  const res = await fetch(
    `${JIKAN_URL}/top/anime?page=${page}&limit=${limit}&sfw=true&filter=upcoming`,
  )

  const data: Jikan = await res.json()

  const seenIds = new Set()
  data.data = data.data.filter((anime) => {
    if (seenIds.has(anime.mal_id)) {
      return false
    }
    seenIds.add(anime.mal_id)
    return true
  })

  return data
}

type SearchParams = {
  q: string
  limit: number
  genre?: string
  status?: string
  year?: string
  format?: string
}

export const getSearching = async ({
  q,
  limit,
  genre,
  status,
  year,
  format,
}: SearchParams) => {
  const url = new URL(`${JIKAN_URL}/anime`)
  url.searchParams.set('q', q)
  url.searchParams.set('limit', String(limit))
  url.searchParams.set('sfw', 'true')
  if (genre) url.searchParams.set('genres', genre)
  if (status) url.searchParams.set('status', status)
  if (year) url.searchParams.set('start_date', `${year}-01-01`)
  if (format) url.searchParams.set('type', format)

  const res = await fetch(url.toString())
  if (!res.ok) {
    throw new Error(`Error al llamar a la API: ${res.status} ${res.statusText}`)
  }

  const data: Jikan = await res.json()

  const seenIds = new Set<number>()
  data.data = data.data.filter((anime) => {
    if (seenIds.has(anime.mal_id)) return false
    seenIds.add(anime.mal_id)
    return true
  })

  return data
}
