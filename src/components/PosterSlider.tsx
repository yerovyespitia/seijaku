import { TopAnimes } from '@/types/topAnimes'
import { Link } from '@tanstack/react-router'

type PosterSliderProps = {
  title: string
  animes: TopAnimes
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
          <button className='px-5 py-2 text-sm font-medium rounded-md text-txtGray/70 bg-sd hover:bg-sd/70 hover:text-zinc-300'>
            View More
          </button>
        </Link>
      </section>

      <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
        {animes.data.map((anime) => (
          <div
            className='w-full h-0 pb-[150%] relative overflow-hidden rounded-lg cursor-pointer'
            key={anime.mal_id}
          >
            <img
              className='absolute inset-0 object-cover w-full h-full'
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-lg'></div>
            <h3 className='absolute bottom-2 left-0 right-0 flex justify-center text-center text-zinc-200 text-[13px] font-medium z-10'>
              {anime.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
