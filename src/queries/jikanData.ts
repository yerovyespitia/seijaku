import { Details, Jikan } from '@/types/jikan'

const JIKAN_URL = 'https://api.jikan.moe/v4'

export const getPopulars = async (limit: number) => {
  const res = await fetch(
    `${JIKAN_URL}/top/anime?page=1&limit=${limit}&sfw=true`
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

export const getTrending = async (limit: number) => {
  const res = await fetch(
    `${JIKAN_URL}/top/anime?&filter=airing&limit=${limit}&sfw=true&type=tv`
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

export const getUpcoming = async (limit: number) => {
  const res = await fetch(
    `${JIKAN_URL}/top/anime?page=1&limit=${limit}&sfw=true&filter=upcoming`
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

export const getHero = async (limit: number) => {
  const res = await fetch(
    `${JIKAN_URL}/top/anime?page=1&limit=${limit}&sfw=true&type=movie&filter=favorite`
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

export const getSearching = async (
  q: string,
  limit: number,
  status: string,
  year: string,
  type: string
) => {
  const res = await fetch(
    `${JIKAN_URL}/anime?q=${q}&limit=${limit}&sfw=true&status=${status}&start_date=${year}-01-01&type=${type}`
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
