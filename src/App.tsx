import { AnimeSlider } from './components/AnimeSlider'
import { Topbar } from './components/Topbar'

export default function App() {
  return (
    <main>
      {/* <Topbar /> */}
      <AnimeSlider title="Continue Watching" videos={4} />
      <AnimeSlider title="Trending Now" videos={8} />
      <AnimeSlider title="Top Rated" videos={8} />
      <AnimeSlider title="Drama" videos={8} />
    </main>
  )
}
