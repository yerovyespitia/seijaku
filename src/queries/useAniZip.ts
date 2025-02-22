import { useQuery } from '@tanstack/react-query'
import { getAniZip } from './aniData'

export const useAnimeZip = (id: number) => {
  return useQuery({
    queryKey: ['list-episodes', id],
    queryFn: async () => getAniZip(id),
    staleTime: 1000 * 60 * 60,
    retry: 2,
  })
}
