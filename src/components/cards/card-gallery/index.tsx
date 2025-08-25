import { AniZip, Episode } from '@/types/zip'

type CardGalleryProps = {
  list: AniZip
}

export const CardGallery = ({ list }: CardGalleryProps) => {
  console.log('list', list.episodes)
  const isValidNumber = (str: string) => /^\d+$/.test(str)
  const episodes = Object.values(list.episodes).filter(
    (episode): episode is Episode => typeof episode === 'object',
  )

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6'>
      {episodes
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
            <button className='p-3 rounded-full bg-sd/40 backdrop-blur-sm border-none absolute z-90 left-[40%] bottom-[40%] hidden group-hover:block transition-all duration-150 ease-linear cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#BBBEC1'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='#BBBEC1'
                className='size-7'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
                />
              </svg>
            </button>
            <div className='absolute bottom-0 rounded-lg left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/2 group-hover:h-full flex items-center justify-center'></div>
            <article className='absolute z-10 bottom-2 px-2'>
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
