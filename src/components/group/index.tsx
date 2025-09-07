import { Loading as PGLoading } from '@/components/poster-gallery/loading'

type GroupProps = {
  name: string
  items: number
}

export const Group = ({ name, items }: GroupProps) => {
  return (
    <section className='bg-sd/30 p-4 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold text-zinc-200'>{name}</h2>
      <p className='text-sm text-txtGray/70'>{items} items</p>
      <section className='pt-2'>
        <PGLoading videos={8} />
      </section>
    </section>
  )
}
