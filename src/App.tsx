import { CardSlider } from './components/CardSlider'
import { PosterSlider } from './components/PosterSlider'
import { Topbar } from './components/Topbar'

export default function App() {
  return (
    <main>
      <Topbar />
      <PosterSlider title="Continue Watching" videos={8} />
      <CardSlider title="Trending Now" videos={8} />
      <CardSlider title="Top Rated" videos={8} />
      <CardSlider title="Drama" videos={8} />
    </main>
  )
}
