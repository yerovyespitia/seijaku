import { CardSlider } from '@/components/CardSlider'
import { PosterSlider } from '@/components/PosterSlider'
import { Hero } from '@/components/Hero'
import { Layout } from '@/components/Layout'

export default function App() {
  return (
    <>
      <Hero />
      <Layout>
        <CardSlider title='Continue Watching' videos={4} />
        <CardSlider title='New Releases' videos={4} />
        <PosterSlider title='Trending Now' videos={8} />
        <PosterSlider title='Popular' videos={8} />
        <PosterSlider title='Drama' videos={8} />
        <PosterSlider title='Romance' videos={8} />
        <PosterSlider title='Action' videos={8} />
        <PosterSlider title='Adventure' videos={8} />
        <PosterSlider title='Fantasy' videos={8} />
      </Layout>
    </>
  )
}
