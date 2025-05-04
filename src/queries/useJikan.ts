import { invoke } from '@tauri-apps/api/core'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import {
  getHero,
  getInfo,
  getPopulars,
  getTrending,
  getUpcoming,
} from './jikanData'
import { Jikan } from '@/types/jikan'

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

export const useDetails = (id: number) => {
  return useQuery({
    queryKey: ['details-anime', id],
    queryFn: async () => {
      const data = await getInfo(id)
      return data
    },
    staleTime: 1000 * 60 * 60,
    retry: 2,
  })
}

export const useTop = (
  limit: number,
  options?: Partial<UseQueryOptions<Jikan>>
) => {
  return useQuery({
    queryKey: ['top-anime', limit],
    queryFn: async () => {
      const data = await getPopulars(limit)
      data.data = data.data.slice(0, 8)
      return data
    },
    staleTime: 1000 * 60 * 60,
    retry: 2,
    ...options,
  })
}

export const useTrending = (
  limit: number,
  options?: Partial<UseQueryOptions<Jikan>>
) => {
  return useQuery({
    queryKey: ['trending-anime', limit],
    queryFn: async () => {
      const data = await getTrending(limit)
      data.data = data.data.slice(0, 8)
      return data
    },
    staleTime: 1000 * 60 * 60,
    retry: 2,
    ...options,
  })
}

export const useUpcoming = (
  limit: number,
  options?: Partial<UseQueryOptions<Jikan>>
) => {
  return useQuery({
    queryKey: ['upcoming-anime', limit],
    queryFn: async () => {
      const data = await getUpcoming(limit)
      data.data = data.data.slice(0, 8)
      return data
    },
    staleTime: 1000 * 60 * 60,
    retry: 2,
    ...options,
  })
}

export const useHeroMovie = (limit: number) => {
  return useQuery({
    queryKey: ['hero-anime', limit],
    queryFn: async () => getHero(limit),
    staleTime: 1000 * 60 * 60,
    retry: 2,
  })
}
