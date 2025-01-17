import { CardSlider } from './components/CardSlider'
import { PosterSlider } from './components/PosterSlider'
import { Topbar } from './components/Topbar'

export default function App() {
  return (
    <main>
      <Topbar />
      <CardSlider title="Continue Watching" videos={8} />
      <PosterSlider title="Trending Now" videos={8} />
      <PosterSlider title="Top Rated" videos={8} />
      <PosterSlider title="Drama" videos={8} />
    </main>
  )
}
