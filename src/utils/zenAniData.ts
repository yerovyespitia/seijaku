import { fetch } from '@tauri-apps/plugin-http'

export const getListOfEpisodes = async (id: number) => {
  const res = await fetch(
    `https://zenshin-supabase-api.onrender.com/mappings?anilist_id=${id}`
  )

  const data = res.json()

  return data
}
