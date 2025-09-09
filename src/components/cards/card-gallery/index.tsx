import { Anime } from '@/types/jikan'
import { AniZip, Episode } from '@/types/zip'
import { Play } from 'lucide-react'

type CardGalleryProps = {
  list: AniZip
  anime?: {
    data: Anime
  }
}

export const CardGallery = ({ list, anime }: CardGalleryProps) => {
  const isValidNumber = (str: string) => /^\d+$/.test(str)

  const episodes = Object.values(list.episodes).filter(
    (episode): episode is Episode => typeof episode === 'object',
  )

  const displayEpisodes =
    anime?.data?.type === 'Movie' ? episodes.slice(0, 1) : episodes

  return (
    <div className='pt-6 mt-60 md:mt-72'>
      <h2 className='text-gray-100 text-2xl font-semibold mb-4'>Episodes</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
        {displayEpisodes
          .filter((item) => isValidNumber(item.episode))
          .map((episode, index) => (
            <div className='relative cursor-pointer group' key={index}>
              {episode.image ? (
                <img
                  className='rounded-lg w-full aspect-[309/231] brightness-75'
                  src={episode.image}
                  alt={`${episode.tvdbId}`}
                />
              ) : (
                <div className='rounded-lg w-full aspect-[309/231] bg-zinc-800 flex flex-col items-center justify-center' />
              )}
              <button className='btn-glass absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-50 animate-pressed'>
                <Play size={20} fill='white' strokeWidth={4} color='white' />
              </button>
              <div className='absolute bottom-0 rounded-lg left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/2 group-hover:h-full group-hover:from-black flex items-center justify-center transition-all duration-100 ease-in'></div>
              <article className='absolute z-10 bottom-2 px-2'>
                <p className='text-zinc-300 text-2xl font-semibold'>
                  {episode.episode}
                </p>
                <h3 className='text-white'>{episode.title.en}</h3>
              </article>
            </div>
          ))}
      </div>
    </div>
  )
}
