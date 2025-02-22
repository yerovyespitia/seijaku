import { AniZip, Episode } from '@/types/zip'

type CardGalleryProps = {
  list: AniZip
}

export const CardGallery = ({ list }: CardGalleryProps) => {
  console.log('list', list.episodes)
  const episodes = Object.values(list.episodes).filter(
    (episode): episode is Episode => typeof episode === 'object'
  )

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6'>
      {episodes.map((episode) => (
        <div
          className='relative cursor-pointer'
          key={`${episode.tvdbId}`}
        >
          <img
            className='rounded-lg w-full aspect-[309/231]'
            src={episode.image}
            alt={`${episode.tvdbId}`}
          />
          <div className='absolute bottom-0 rounded-lg left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/2 flex items-center justify-center'></div>
          <article className='absolute z-20 bottom-2 left-2'>
            <p className='text-zinc-300 text-2xl font-semibold'>
              {episode.episode}
            </p>
            <h3>{episode.title.en}</h3>
          </article>
        </div>
      ))}
    </div>
  )
}
