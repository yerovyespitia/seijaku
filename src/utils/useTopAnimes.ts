import { invoke } from '@tauri-apps/api/core'
import { useQuery } from '@tanstack/react-query'

export const useTopAnimes = (limit: number) => {
  return useQuery({
    queryKey: ['top-anime', limit],
    queryFn: async () => {
      const data = await invoke('get_top_anime', { limit })
      return data
    },
    staleTime: 1000 * 60 * 60,
    retry: 2,
  })
}
