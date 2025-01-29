import { invoke } from '@tauri-apps/api/core'
import { useQuery } from '@tanstack/react-query'

type AnimeFilters = {
  genre?: string
  format?: string
  status?: string
  year?: string
}

export const useFind = (
  search: string,
  limit: number = 25,
  filters: AnimeFilters
) => {
  return useQuery({
    queryKey: ['search-anime', search, limit, filters],
    queryFn: async () => {
      const queryParams = {
        search,
        limit,
        ...(filters.genre && { genre: filters.genre }),
        ...(filters.format && { format: filters.format }),
        ...(filters.status && { status: filters.status }),
        ...(filters.year && { year: filters.year }),
      }

      const data = await invoke('search_anime', queryParams)
      return data
    },
    staleTime: 1000 * 60 * 60,
    retry: 2,
  })
}

export const useTop = (limit: number) => {
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

export const useTrending = (limit: number) => {
  return useQuery({
    queryKey: ['trending-anime', limit],
    queryFn: async () => {
      const data = await invoke('trending_anime', { limit })
      return data
    },
    staleTime: 1000 * 60 * 60,
    retry: 2,
  })
}

export const useUpcoming = (limit: number) => {
  return useQuery({
    queryKey: ['upcoming-anime', limit],
    queryFn: async () => {
      const data = await invoke('upcoming_anime', { limit })
      return data
    },
    staleTime: 1000 * 60 * 60,
    retry: 2,
  })
}

export const useHeroMovie = (limit: number) => {
  return useQuery({
    queryKey: ['hero-movie', limit],
    queryFn: async () => {
      const data = await invoke('hero_movie', { limit })
      return data
    },
    staleTime: 1000 * 60 * 60,
    retry: 2,
  })
}
