import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '@/components/Layout'
import { SkeletonPosterSlider } from '../components/SkeletonPosterSlider'
import { SkeletonHero } from '../components/SkeletonHero'
import { SkeletonCardSlider } from '../components/SkeletonCardSlider'
import { ErrorPage } from '@/Error'
import { Hero } from '@/components/Hero'
import { useHeroMovie } from '@/queries/useJikan'

export const Route = createFileRoute('/')({
  component: Index,
  errorComponent: () => (
    <div className='px-6'>
      <ErrorPage />
    </div>
  ),
})

function Index() {
  const { data: hero, isLoading } = useHeroMovie(5)

  if (isLoading) {
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

  return (
    <>
      <Hero animes={hero} />
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
