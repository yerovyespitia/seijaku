import { Details } from '@/types/jikan'

export const truncatedDesc = (anime: Details) => {
  let synopsis = anime.data.synopsis
  const indexDesc = synopsis.indexOf('.')
  const description = synopsis
    .split('')
    .slice(0, indexDesc + 1)
    .join('')

  return description
}
