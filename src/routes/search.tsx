import { createFileRoute } from '@tanstack/react-router'
import { Searchbar } from '@/components/Searchbar'
import { PosterGallery } from '@/components/PosterGallery'
import { Layout } from '@/components/Layout'

export const Route = createFileRoute('/search')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Layout>
      <Searchbar />
      <PosterGallery videos={48} />
    </Layout>
  )
}
