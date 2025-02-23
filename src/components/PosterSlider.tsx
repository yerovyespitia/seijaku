import { Jikan } from '@/types/jikan'
import { Link } from '@tanstack/react-router'
import { Poster } from './Poster'
import { Button } from './ui/Button'

type PosterSliderProps = {
  title: string
  animes: Jikan
}

export const PosterSlider = ({ title, animes }: PosterSliderProps) => {
  return (
    <div className='pt-6'>
      <section className='flex justify-between items-center pb-4'>
        <h1 className='text-2xl font-bold text-txtGray mb-0'>{title}</h1>
        <Link
          to='/category/$categoryId'
          params={{ categoryId: title }}
        >
          <Button>View more</Button>
        </Link>
      </section>

      <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
        {animes.data.map((anime, index) => (
          <Poster
            key={index}
            anime={anime}
          />
        ))}
      </div>
    </div>
  )
}
