import { Loading as PGLoading } from '@/components/poster-gallery/Loading'

type GroupProps = {
  name: string
  items: number
}

export const Group = ({ name, items }: GroupProps) => {
  return (
    <section className='bg-sd/30 p-4 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold'>{name}</h2>
      <p className='text-sm text-txtGray/70 pt-2'>{items} items</p>
      <section className='pt-4'>
        <PGLoading videos={8} />
      </section>
    </section>
  )
}
