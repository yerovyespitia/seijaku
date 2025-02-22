import { Details } from '@/types/jikan'
import { ArrowLeft } from 'lucide-react'
import { Badges } from './Badges'
import { useRouter } from '@tanstack/react-router'
import { truncatedDesc } from '@/utils'

type BannerProps = {
  anime: Details
  zip: any
}

export const Banner = ({ anime, zip }: BannerProps) => {
  const router = useRouter()
  const categories = anime.data.genres.map((genre) => genre.name)
  const description = truncatedDesc(anime)

  const logoImage = zip?.images?.find(
    (image: { coverType: string }) => image.coverType === 'Clearlogo'
  )
  const fanartImage = zip?.images?.find(
    (image: { coverType: string }) => image.coverType === 'Fanart'
  )

  return (
    <section
      className='relative aspect-video bg-no-repeat h-full bg-cover bg-center'
      style={{
        backgroundImage: `url(${
          fanartImage?.url ||
          anime.data.images.jpg.large_image_url ||
          anime.data.images.jpg.image_url
        })`,
      }}
    >
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3 flex items-center justify-center'></div>
      <div className='absolute top-0 left-0 right-0 bg-gradient-to-t from-transparent to-black h-16 flex items-center justify-center opacity-80'></div>
      <button
        className='absolute top-3 left-8'
        onClick={() => router.history.back()}
      >
        <ArrowLeft className='size-8 text-zinc-300 cursor-pointer' />
      </button>
      <div className='absolute bottom-8 left-8 right-8'>
        {logoImage ? (
          <img
            className='object-cover w-[300px] pb-4'
            src={logoImage?.url}
          />
        ) : (
          <h2 className='text-4xl font-bold text-zinc-300 mb-3'>
            {anime.data.title_english || anime.data.title}
          </h2>
        )}
        <Badges categories={categories} />
        <p className='text-txtGray/90 w-1/3 line-clamp-3'>{description}</p>
      </div>
    </section>
  )
}
