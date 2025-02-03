import { Plus } from 'lucide-react'
import { Group } from './components/Group'
import { Layout } from './components/Layout'
import { Button } from './components/ui/Button'

export default function Collections() {
  const collections = [
    { id: 0, name: 'Watch Later', items: 12 },
    { id: 1, name: 'Watched', items: 8 },
    { id: 2, name: 'Dropped', items: 165 },
  ]

  return (
    <Layout>
      <section className='pt-6 flex justify-between items-center pb-4'>
        <h1 className='text-2xl mb-0 font-semibold text-txtGray'>
          Collections
        </h1>
        <Button>
          <Plus size={16} /> Add Collection
        </Button>
      </section>

      <div className='flex flex-col gap-4'>
        {collections.map(({ id, name, items }) => (
          <Group
            name={name}
            items={items}
            key={id}
          />
        ))}
      </div>
    </Layout>
  )
}
