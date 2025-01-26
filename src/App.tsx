import { CardSlider } from '@/components/CardSlider'
import { PosterSlider } from '@/components/PosterSlider'
import { Hero } from '@/components/Hero'
import { Layout } from '@/components/Layout'
import {
  useHeroMovie,
  useTop,
  useTrending,
  useUpcoming,
} from './utils/useJikanAnimes'
import { JikanAnimes } from './types/jikanAnimes'
import { SkeletonPosterSlider } from './components/SkeletonPosterSlider'
import { SkeletonHero } from './components/SkeletonHero'

export default function App() {
  const { data: movie, isLoading: loadingMovie } = useHeroMovie(4)
  const { data: top, isLoading: loadingTop } = useTop(8)
  const { data: trending, isLoading: loadingTrending } = useTrending(8)
  const { data: upcoming, isLoading: loadingUpcoming } = useUpcoming(8)

  return (
    <>
      {loadingMovie ? <SkeletonHero /> : <Hero animes={movie as JikanAnimes} />}
      <Layout>
        <CardSlider title='Continue Watching' />
        <CardSlider title='New Releases' />
        {loadingUpcoming ? (
          <SkeletonPosterSlider />
        ) : (
          <PosterSlider
            title='Upcoming'
            animes={upcoming as JikanAnimes}
          />
        )}
        {loadingTrending ? (
          <SkeletonPosterSlider />
        ) : (
          <PosterSlider
            title='Trending Now'
            animes={trending as JikanAnimes}
          />
        )}
        {loadingTop ? (
          <SkeletonPosterSlider />
        ) : (
          <PosterSlider
            title='Popular'
            animes={top as JikanAnimes}
          />
        )}
      </Layout>
    </>
  )
}
