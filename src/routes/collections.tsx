import { createFileRoute } from '@tanstack/react-router'
import { Plus } from 'lucide-react'
import { Group } from '@/components/group'
import { Layout } from '@/components/layouts/main'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/collections')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const collections = [
    { id: 0, name: 'Watch Later', items: 12 },
    { id: 1, name: 'Watched', items: 8 },
    { id: 2, name: 'Dropped', items: 165 },
  ]

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Layout>
        <section className='pt-6 flex justify-between items-center pb-4'>
          <h1 className='text-2xl mb-0 font-semibold text-white'>
            Collections
          </h1>
          <button className='btn-primary flex items-center gap-2 animate-pressed'>
            <Plus size={16} /> Add Collection
          </button>
        </section>

        <div className='flex flex-col gap-4'>
          {collections.map(({ id, name, items }) => (
            <Group name={name} items={items} key={id} />
          ))}
        </div>
      </Layout>
    </motion.div>
  )
}
