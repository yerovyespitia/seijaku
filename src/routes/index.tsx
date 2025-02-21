import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '@/components/Layout'
import { SkeletonPosterSlider } from '../components/SkeletonPosterSlider'
import { SkeletonHero } from '../components/SkeletonHero'
import { SkeletonCardSlider } from '../components/SkeletonCardSlider'
import { ErrorPage } from '@/Error'

export const Route = createFileRoute('/')({
  component: Index,
  errorComponent: () => (
    <div className='px-6'>
      <ErrorPage />
    </div>
  ),
})

function Index() {
  return (
    <>
      <SkeletonHero />
      <Layout>
        <SkeletonCardSlider />
        <SkeletonCardSlider />
        <SkeletonPosterSlider />
        <SkeletonPosterSlider />
        <SkeletonPosterSlider />
      </Layout>
    </>
  )
}
