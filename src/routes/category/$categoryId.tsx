import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '@/components/Layout'
import { ErrorPage } from '@/Error'
import { SkeletonPosterGallery } from '@/components/SkeletonPosterGallery'
import { useTop, useTrending, useUpcoming } from '@/queries/useData'
import { PosterGallery } from '@/components/PosterGallery'
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
      <ErrorPage />
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

  const { data: animes, isLoading } = useCategoryQuery
    ? useCategoryQuery(25)
    : { data: null, isLoading: false }

  if (isLoading) {
    return (
      <Layout>
        <section className='pt-6 flex justify-between items-center pb-4'>
          <h1 className='text-2xl mb-0 font-semibold text-txtGray'>
            {categoryId}
          </h1>
        </section>
        <SkeletonPosterGallery videos={25} />
      </Layout>
    )
  }

  return (
    <Layout>
      <section className='pt-6 flex justify-between items-center pb-4'>
        <h1 className='text-2xl mb-0 font-semibold text-txtGray'>
          {categoryId}
        </h1>
      </section>

      {isLoading ? (
        <SkeletonPosterGallery videos={25} />
      ) : (
        <PosterGallery animes={animes as Jikan} />
      )}
    </Layout>
  )
}
