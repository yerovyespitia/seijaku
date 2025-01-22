import { createFileRoute } from '@tanstack/react-router'
import { PosterGallery } from '../../components/PosterGallery'
import { Layout } from '../../components/Layout'
import { ErrorPage } from '../../Error'

export const Route = createFileRoute('/category/$categoryId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    // throw new Error()
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
      categoryId: params.categoryId,
    }
  },
  pendingComponent: () => (
    <Layout>
      <div className='py-6'>
        <PosterGallery videos={48} />
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

  return <div>Hello {categoryId}</div>
}
