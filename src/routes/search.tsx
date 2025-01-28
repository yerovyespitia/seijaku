import { createFileRoute } from '@tanstack/react-router'
import { ErrorPage } from '@/Error'
import { Layout } from '@/components/Layout'
import { SkeletonPosterGallery } from '@/components/SkeletonPosterGallery'
import Search from '@/Search'

export const Route = createFileRoute('/search')({
  component: RouteComponent,
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
  return <Search />
}
