import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '@/components/layouts/main'
import { Loading as PSLoading } from '@/components/poster-slider/loading'
import { Loading as HLoading } from '@/components/hero/loading'
import { NotFound } from '@/components/errors/not-found'
import { Hero } from '@/components/hero'
import { PosterSlider } from '@/components/poster-slider'
import {
  useHeroMovie,
  useTop,
  useTrending,
  useUpcoming,
} from '@/queries/useQuery'

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
  const { data: upcoming } = useUpcoming(8, {
    enabled: !!hero,
  })
  const { data: trending } = useTrending(8, {
    enabled: !!hero,
  })
  const { data: top } = useTop(8, {
    enabled: !!hero,
  })

  console.log('hero', hero)

  const sections = [
    { title: 'Upcoming', animes: upcoming },
    { title: 'Trending', animes: trending },
    { title: 'Top', animes: top },
  ]

  return (
    <>
      {hero ? <Hero animes={hero} /> : <HLoading />}
      <Layout>
        {sections.map(({ title, animes }) =>
          animes ? (
            <PosterSlider key={title} title={title} animes={animes} />
          ) : (
            <PSLoading key={title} />
          ),
        )}
      </Layout>
    </>
  )
}
