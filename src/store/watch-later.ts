import { create } from 'zustand'

export type WatchLaterItem = {
  id: number
  title: string
  posterUrl: string
}

type WatchLaterState = {
  items: WatchLaterItem[]
  add: (item: WatchLaterItem) => void
  remove: (id: number) => void
  toggle: (item: WatchLaterItem) => void
}

export const useWatchLaterStore = create<WatchLaterState>((set) => ({
  items: [],
  add: (item) =>
    set((state) => {
      const exists = state.items.some((current) => current.id === item.id)
      if (exists) return state
      return { items: [...state.items, item] }
    }),
  remove: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  toggle: (item) =>
    set((state) => {
      const exists = state.items.some((current) => current.id === item.id)
      if (exists) {
        return {
          items: state.items.filter((current) => current.id !== item.id),
        }
      }
      return { items: [...state.items, item] }
    }),
}))
