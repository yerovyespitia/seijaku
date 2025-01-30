import { Details } from '@/types/jikan'

type BannerProps = {
  anime: Details
}

export const Banner = ({ anime }: BannerProps) => {
  console.log('banner', anime)

  return (
    <section
      className='relative aspect-video bg-no-repeat h-full bg-cover bg-center'
      style={{
        backgroundImage: `url(${anime.data.trailer.images.maximum_image_url})`,
      }}
    >
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3 flex items-center justify-center'></div>
      <div className='absolute bottom-8 left-8 right-8'>
        <h2 className='text-4xl font-bold text-zinc-300 mb-3'>
          {anime.data.title_english || anime.data.title}
        </h2>
        <p className='text-txtGray/90 w-1/3 line-clamp-2'>
          {anime.data.synopsis}
        </p>
      </div>
    </section>
  )
}
