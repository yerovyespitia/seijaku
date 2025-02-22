import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '@/components/Layout'
import { SkeletonPosterSlider } from '@/components/SkeletonPosterSlider'
import { SkeletonHero } from '@/components/SkeletonHero'
import { SkeletonCardSlider } from '@/components/SkeletonCardSlider'
import { ErrorPage } from '@/Error'
import { Hero } from '@/components/Hero'
import { PosterSlider } from '@/components/PosterSlider'
import { useHeroMovie, useTrending, useUpcoming } from '@/queries/useJikan'

export const Route = createFileRoute('/')({
  component: Index,
  errorComponent: () => (
    <div className='px-6'>
      <ErrorPage />
    </div>
  ),
})

function Index() {
  const { data: hero, isLoading: loadingHero } = useHeroMovie(5)
  const { data: upcoming, isLoading: loadingUpcoming } = useUpcoming(8)
  const { data: trending, isLoading: loadingTrending } = useTrending(8)
  // const { data: top, isLoading: loadingTop } = useTop(8)

  if (loadingHero || !hero) {
    return (
      <>
        <SkeletonHero />
        <Layout>
          {/* <SkeletonCardSlider />
          <SkeletonCardSlider /> */}
          <SkeletonPosterSlider />
          <SkeletonPosterSlider />
          {/* <SkeletonPosterSlider /> */}
        </Layout>
      </>
    )
  }

  return (
    <>
      <Hero animes={hero} />
      <Layout>
        {/* <SkeletonCardSlider />
        <SkeletonCardSlider /> */}
        {loadingUpcoming ? (
          <SkeletonCardSlider />
        ) : (
          <PosterSlider
            title='Upcoming'
            animes={upcoming}
          />
        )}
        {loadingTrending ? (
          <SkeletonCardSlider />
        ) : (
          <PosterSlider
            title='Trending'
            animes={trending}
          />
        )}
        {/* {loadingTop ? (
          <SkeletonCardSlider />
        ) : (
          <PosterSlider
            title='Top'
            animes={top}
          />
        )} */}
      </Layout>
    </>
  )
}
