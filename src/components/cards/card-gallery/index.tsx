import { Anime } from '@/types/jikan'
import { AniZip, Episode } from '@/types/zip'
import { Play, Timer } from 'lucide-react'

type CardGalleryProps = {
  list: AniZip
  jikan?: {
    data: Anime
  }
}

export const CardGallery = ({ list, jikan }: CardGalleryProps) => {
  const isValidNumber = (str: string) => /^\d+$/.test(str)

  const episodes =
    list && list.episodes
      ? Object.values(list.episodes).filter(
          (episode): episode is Episode => typeof episode === 'object',
        )
      : []

  const typeMovie = jikan?.data?.type === 'Movie'
  const posterImage = jikan?.data?.images?.jpg?.large_image_url

  const displayEpisodes = typeMovie ? episodes.slice(0, 1) : episodes

  return (
    <div className='pt-6 mt-60 md:mt-72'>
      <h2 className='text-gray-100 text-2xl font-semibold mb-4'>
        {typeMovie ? 'Movie' : 'Episodes'}
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
        {displayEpisodes.length > 0 ? (
          displayEpisodes
            .filter((item) => isValidNumber(item.episode))
            .map((episode, index) => (
              <div className='relative cursor-pointer group' key={index}>
                {episode.image ? (
                  <img
                    className='rounded-lg w-full aspect-[309/231] brightness-75 object-cover'
                    src={episode.image}
                    alt={`${episode.tvdbId}`}
                  />
                ) : (
                  <img
                    className='rounded-lg w-full aspect-[309/231] brightness-75 object-cover'
                    src={posterImage}
                    alt={`Episode ${episode.episode}`}
                  />
                )}
                <button className='btn-glass absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-50 animate-pressed'>
                  <Play size={20} fill='white' strokeWidth={4} color='white' />
                </button>
                <div className='absolute bottom-0 rounded-lg left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/2 group-hover:h-full group-hover:from-black flex items-center justify-center transition-all duration-100 ease-in'></div>
                <article className='absolute z-10 bottom-1 px-2 w-full'>
                  <section className='flex items-center justify-between'>
                    <p className='text-zinc-200 text-2xl font-semibold'>
                      {episode.episode}
                    </p>
                  </section>
                  <section className='flex justify-between gap-1 items-center'>
                    <h3 className='text-zinc-300 leading-tight font-medium text-sm line-clamp-2 mb-1'>
                      {episode.title.en}
                    </h3>
                    <div className='flex items-center gap-1'>
                      <Timer color='#d4d4d8' size={15} strokeWidth={3} />
                      <p className='text-zinc-300 text-sm font-medium'>
                        {episode.length}m
                      </p>
                    </div>
                  </section>
                </article>
              </div>
            ))
        ) : (
          <p className='text-gray-400 font-medium'>No episodes available</p>
        )}
      </div>
    </div>
  )
}
