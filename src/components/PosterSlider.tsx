import { Jikan } from '@/types/jikan'
import { Link } from '@tanstack/react-router'

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
          <button className='px-5 py-2 text-sm font-medium rounded-md text-txtGray/70 bg-sd hover:bg-sd/70 hover:text-zinc-300'>
            View More
          </button>
        </Link>
      </section>

      <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
        {animes.data.map((anime) => (
          <section
            className='relative w-full h-0 pb-[150%] overflow-hidden rounded-md cursor-pointer'
            key={anime.mal_id}
          >
            <section className='absolute top-0 left-0 w-full h-full overflow-hidden rounded-md group cursor-pointer transition-transform duration-300 transform hover:scale-[1.03]'>
              <img
                className='w-full h-full object-cover'
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
              />
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300' />
              <article className='hidden group-hover:flex justify-center items-center absolute inset-0 font-semibold text-center text-sm px-3 text-white transition-all duration-300'>
                {anime.title}
              </article>
            </section>
          </section>
        ))}
        {/* {animes.data.map((anime) => (
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
            <h3 className='absolute bottom-2 left-0 right-0 flex justify-center text-center text-zinc-200 text-[13px] font-medium z-10 px-3'>
              {anime.title}
            </h3>
          </div>
        ))} */}
      </div>
    </div>
  )
}
