import { AniZip } from '@/types/zip'

export const getAniZip = async (id: number) => {
  const res = await fetch(`https://api.ani.zip/mappings?anilist_id=${id}`)

  const data: AniZip = await res.json()

  return data
}
