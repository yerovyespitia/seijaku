import { Plus } from 'lucide-react'
import { Group } from './components/Group'
import { Layout } from './components/Layout'

export default function Collections() {
  const collections = [
    { id: 'watch-later', name: 'Watch Later', items: 12 },
    { id: 'watch-later', name: 'For Summer', items: 8 },
    { id: 'watch-later', name: 'Waiting', items: 165 },
  ]

  return (
    <Layout>
      <section className='pt-6 flex justify-between items-center pb-4'>
        <h1 className='text-2xl mb-0 font-semibold text-txtGray'>
          Collections
        </h1>
        <button className='flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-md text-txtGray/70 bg-sd hover:bg-sd/70 hover:text-zinc-300'>
          <Plus size={16} /> Add Collection
        </button>
      </section>

      <div className='flex flex-col gap-4'>
        {collections.map(({ name, items }) => (
          <Group
            name={name}
            items={items}
            key={items}
          />
        ))}
      </div>
    </Layout>
  )
}
