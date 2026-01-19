import { ReactNode } from 'react'
import { Loading as PGLoading } from '@/components/poster-gallery/Loading'

type GroupProps = {
  name: string
  items: number
  children?: ReactNode
}

export const Group = ({ name, items, children }: GroupProps) => {
  return (
    <section className='bg-sd/30 p-4 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold text-zinc-200'>{name}</h2>
      <p className='text-sm text-txtGray/70'>{items} items</p>
      <section className='pt-2'>
        {children ?? <PGLoading videos={8} />}
      </section>
    </section>
  )
}
