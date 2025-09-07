import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '@/components/layouts/main'
import { NotFound } from '@/components/errors/not-found'
import { Loading as PGLoading } from '@/components/poster-gallery/loading'
import { useTop, useTrending, useUpcoming } from '@/queries/useQuery'
import { PosterGallery } from '@/components/poster-gallery'
import { Jikan } from '@/types/jikan'
import { useEffect } from 'react'

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categoryHooks = {
    top: useTop,
    trending: useTrending,
    upcoming: useUpcoming,
  } as const

  const categoryKey = categoryId.toLowerCase() as keyof typeof categoryHooks
  const useCategoryQuery = categoryHooks[categoryKey]

  const { data: animes } = useCategoryQuery
    ? useCategoryQuery(25)
    : { data: null }

  return (
    <Layout>
      <section className='pt-6 flex justify-between items-center pb-4'>
        <h1 className='text-2xl mb-0 font-semibold text-white'>{categoryId}</h1>
      </section>

      {animes ? (
        <PosterGallery animes={animes as Jikan} />
      ) : (
        <PGLoading videos={25} />
      )}
    </Layout>
  )
}
