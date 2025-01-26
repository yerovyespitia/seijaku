import { CardSlider } from '@/components/CardSlider'
import { PosterSlider } from '@/components/PosterSlider'
import { Hero } from '@/components/Hero'
import { Layout } from '@/components/Layout'
import { useTopAnimes } from './utils/useTopAnimes'
import { TopAnimes } from './types/topAnimes'
import { SkeletonPosterSlider } from './components/SkeletonPosterSlider'

export default function App() {
  const { data: topAnimes, isLoading } = useTopAnimes(8)

  return (
    <>
      <Hero />
      <Layout>
        <CardSlider title='Continue Watching' videos={4} />
        <CardSlider title='New Releases' videos={4} />
        {isLoading ? (
          <SkeletonPosterSlider
            title='Popular'
            videos={8}
          />
        ) : (
          <PosterSlider
            title='Popular'
            animes={topAnimes as TopAnimes}
          />
        )}
      </Layout>
    </>
  )
}
