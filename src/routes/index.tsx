import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '@/components/layouts/main'
import { Loading as PSLoading } from '@/components/poster-slider/Loading'
import { Loading as HLoading } from '@/components/hero/Loading'
import { NotFound } from '@/errors/not-found'
import { Hero } from '@/components/hero'
import { PosterSlider } from '@/components/poster-slider'
import {
  useHeroMovie,
  useTop,
  useTrending,
  useUpcoming,
} from '@/queries/useData'
import { Jikan } from '@/types/jikan'

export const Route = createFileRoute('/')({
  component: Index,
  errorComponent: () => (
    <div className='px-6'>
      <NotFound />
    </div>
  ),
})

function Index() {
  const { data: hero } = useHeroMovie(5)
  const { data: upcoming } = useUpcoming(12, {
    enabled: !!hero,
  })
  const { data: trending } = useTrending(12, {
    enabled: !!hero,
  })
  const { data: top } = useTop(12, {
    enabled: !!hero,
  })

  console.log('xxx', hero)

  return (
    <>
      {hero ? <Hero animes={hero} /> : <HLoading />}
      <Layout>
        {upcoming ? (
          <PosterSlider title='Upcoming' animes={upcoming as Jikan} />
        ) : (
          <PSLoading />
        )}
        {trending ? (
          <PosterSlider title='Trending' animes={trending as Jikan} />
        ) : (
          <PSLoading />
        )}
        {top ? (
          <PosterSlider title='Top' animes={top as Jikan} />
        ) : (
          <PSLoading />
        )}
      </Layout>
    </>
  )
}
