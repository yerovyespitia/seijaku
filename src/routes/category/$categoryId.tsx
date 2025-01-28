import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '@/components/Layout'
import { ErrorPage } from '@/Error'
import { CardGallery } from '@/components/CardGallery'
import { SkeletonPosterGallery } from '@/components/SkeletonPosterGallery'

export const Route = createFileRoute('/category/$categoryId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      categoryId: params.categoryId,
    }
  },
  pendingComponent: () => (
    <Layout>
      <div className='py-6'>
        <SkeletonPosterGallery videos={48} />
      </div>
    </Layout>
  ),
  errorComponent: () => (
    <div className='px-6'>
      <ErrorPage />
    </div>
  ),
})

function RouteComponent() {
  const { categoryId } = Route.useLoaderData()

  return (
    <Layout>
      <section className='pt-6 flex justify-between items-center pb-4'>
        <h1 className='text-2xl mb-0 font-semibold text-txtGray'>
          {categoryId}
        </h1>
      </section>

      {categoryId === 'Continue Watching' || categoryId === 'New Releases' ? (
        <CardGallery videos={48} />
      ) : (
        <SkeletonPosterGallery videos={48} />
      )}
    </Layout>
  )
}
