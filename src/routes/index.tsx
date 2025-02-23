import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '@/components/Layout'
import { SkeletonPosterSlider } from '@/components/SkeletonPosterSlider'
import { SkeletonHero } from '@/components/SkeletonHero'
import { ErrorPage } from '@/Error'
import { Hero } from '@/components/Hero'
import { PosterSlider } from '@/components/PosterSlider'
import {
  useHeroMovie,
  useTop,
  useTrending,
  useUpcoming,
} from '@/queries/useJikan'
import { Jikan } from '@/types/jikan'

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
  const { data: upcoming, isLoading: loadingUpcoming } = useUpcoming(8, {
    enabled: !!hero,
  })
  const { data: trending, isLoading: loadingTrending } = useTrending(8, {
    enabled: !!hero,
  })
  const { data: top, isLoading: loadingTop } = useTop(8, { enabled: !!hero })

  if (loadingHero || !hero) {
    return (
      <>
        <SkeletonHero />
        <Layout>
          {/* <SkeletonCardSlider />
          <SkeletonCardSlider /> */}
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
        {/* <SkeletonCardSlider />
        <SkeletonCardSlider /> */}
        {loadingUpcoming ? (
          <SkeletonPosterSlider />
        ) : (
          <PosterSlider
            title='Upcoming'
            animes={upcoming as Jikan}
          />
        )}
        {loadingTrending ? (
          <SkeletonPosterSlider />
        ) : (
          <PosterSlider
            title='Trending'
            animes={trending as Jikan}
          />
        )}
        {loadingTop ? (
          <SkeletonPosterSlider />
        ) : (
          <PosterSlider
            title='Top'
            animes={top as Jikan}
          />
        )}
      </Layout>
    </>
  )
}
