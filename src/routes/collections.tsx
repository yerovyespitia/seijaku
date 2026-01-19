import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

import { Group } from '@/components/group'
import { Layout } from '@/components/layouts/main'
import { useWatchLaterStore } from '@/store/watch-later'

export const Route = createFileRoute('/collections')({
  component: RouteComponent,
})

function RouteComponent() {
  const watchLaterItems = useWatchLaterStore((state) => state.items)
  const collections = [
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
          <Group name='Watch Later' items={watchLaterItems.length}>
            {watchLaterItems.length ? (
              <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
                {watchLaterItems.map((anime) => (
                  <Link
                    key={anime.id}
                    to='/info/$infoId'
                    params={{ infoId: anime.id.toString() }}
                  >
                    <motion.section
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileTap={{ scale: 0.85 }}
                      transition={{ duration: 1 }}
                      className='relative w-full h-0 pb-[150%] overflow-hidden rounded-lg cursor-pointer'
                    >
                      <section className='absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg group cursor-pointer transition-transform duration-300 transform hover:scale-[1.03]'>
                        <img
                          className='w-full h-full object-cover'
                          src={anime.posterUrl}
                          alt={anime.title}
                        />
                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-bg duration-150' />
                        <article className='hidden group-hover:flex justify-center items-center absolute inset-0 font-semibold text-center text-sm px-3 text-white transition-all duration-300'>
                          {anime.title}
                        </article>
                      </section>
                    </motion.section>
                  </Link>
                ))}
              </div>
            ) : (
              <p className='text-sm text-txtGray/70'>No items yet.</p>
            )}
          </Group>

          {collections.map(({ id, name, items }) => (
            <Group name={name} items={items} key={id} />
          ))}
        </div>
      </Layout>
    </motion.div>
  )
}
