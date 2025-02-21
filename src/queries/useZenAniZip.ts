import { useQuery } from '@tanstack/react-query'
import { getListOfEpisodes } from './zenAniData'

export const useListOfEpisodes = (id: number) => {
  return useQuery({
    queryKey: ['list-episodes', id],
    queryFn: async () => getListOfEpisodes(id),
    staleTime: 1000 * 60 * 60,
    retry: 2,
  })
}
