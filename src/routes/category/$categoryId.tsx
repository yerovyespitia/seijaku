import {
  useMostLiked,
  useTop,
  useTrending,
  useUpcoming,
} from '@/queries/useQuery'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

import { NotFound } from '@/components/errors/not-found'
import { Layout } from '@/components/layouts/main'
import { PosterGallery } from '@/components/poster-gallery'
import { Loading as PGLoading } from '@/components/poster-gallery/loading'

export const Route = createFileRoute('/category/$categoryId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      categoryId: params.categoryId,
    }
  },
  errorComponent: () => (
    <div className='px-6'>
      <NotFound />
    </div>
  ),
})

function RouteComponent() {
  const { categoryId } = Route.useLoaderData()

  const router = useRouter()

  const categoryHooks = {
    top: useTop,
    trending: useTrending,
    upcoming: useUpcoming,
    populars: useMostLiked,
  } as const

  const categoryKey = categoryId.toLowerCase() as keyof typeof categoryHooks
  const useCategoryQuery = categoryHooks[categoryKey]

  const { data: animes } = useCategoryQuery
    ? useCategoryQuery(25)
    : { data: null }

  return (
    <Layout>
      <section className='pt-6 flex items-center gap-1 pb-4'>
        <button
          className='cursor-pointer'
          onClick={() => router.history.back()}
        >
          <ArrowLeft color='white' size={24} strokeWidth={2.5} />
        </button>
        <h1 className='text-2xl mb-0 font-semibold text-white'>{categoryId}</h1>
      </section>

      {animes ? <PosterGallery animes={animes} /> : <PGLoading videos={25} />}
    </Layout>
  )
}
