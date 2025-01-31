export const getPopulars = async (limit: number) => {
  const res = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=1&limit=${limit}&sfw=true`
  )

  const data = res.json()

  return data
}

export const getInfo = async (id: number) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)

  const data = res.json()

  return data
}

export const getTrending = async (limit: number) => {
  const res = await fetch(
    `https://api.jikan.moe/v4/top/anime?&filter=airing&limit=${limit}&sfw=true&type=tv`
  )

  const data = res.json()

  return data
}

export const getUpcoming = async (limit: number) => {
  const res = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=1&limit=${limit}&sfw=true&filter=upcoming`
  )

  const data = res.json()

  return data
}

export const getHero = async (limit: number) => {
  const res = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=1&limit=${limit}&sfw=true&type=movie&filter=favorite`
  )

  const data = res.json()

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
    `https://api.jikan.moe/v4/anime?q=${q}&limit=${limit}&sfw=true&status=${status}&start_date=${year}-01-01&type=${type}`
  )

  const data = res.json()

  return data
}
