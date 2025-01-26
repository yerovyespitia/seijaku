import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Badges } from './Badges'
import { JikanAnimes } from '@/types/jikanAnimes'

type HeroProps = {
  animes: JikanAnimes
}

export const Hero = ({ animes }: HeroProps) => {
  const [currentMovie, setCurrentMovie] = useState(0)
  const currentAnime = animes.data[currentMovie]
  const categories = currentAnime.genres.map((genre) => genre.name)

  const goToNextMovie = () => {
    setCurrentMovie((currentMovie + 1) % animes.data.length)
  }

  const goToPreviosMovie = () => {
    setCurrentMovie(
      (currentMovie - 1 + animes.data.length) % animes.data.length
    )
  }

  console.log('xxx', animes.data)

  return (
    <section className='relative aspect-video'>
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-1/5 flex items-center justify-center'></div>
      <div className='absolute bottom-8 left-8 right-8'>
        <h2 className='text-4xl font-bold text-zinc-300 mb-3'>
          {currentAnime.title}
        </h2>
        <Badges categories={categories} />
        <p className='text-txtGray/90 w-1/3 line-clamp-2'>
          {currentAnime.synopsis}
        </p>
      </div>
      <button
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300'
        aria-label='Previous movie'
        onClick={goToPreviosMovie}
      >
        <ChevronLeft className='size-6' />
      </button>
      <button
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300'
        aria-label='Next movie'
        onClick={goToNextMovie}
      >
        <ChevronRight className='size-6' />
      </button>
      <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentMovie(index)}
            className={`size-2 rounded-full ${
              index === currentMovie ? 'bg-white' : 'bg-white/30'
            } hover:bg-white transition-all duration-300`}
            aria-label={`Go to movie ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
