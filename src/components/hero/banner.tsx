import { useRouter } from '@tanstack/react-router'
import { HeartPlus, ListRestart, Trash2, X } from 'lucide-react'
import { Details } from '@/types/jikan'
import { AniZip } from '@/types/zip'
import { Badges } from '@/components/badges'
import { PlayButton } from '@/components/ui/play-button'
import { motion } from 'framer-motion'

type BannerProps = {
  anime: Details
  zip: AniZip
}

export const Banner = ({ anime, zip }: BannerProps) => {
  const router = useRouter()
  const categories = anime.data.genres.map((genre) => genre.name)

  const logoImage = zip?.images?.find(
    (image: { coverType: string }) => image.coverType === 'Clearlogo',
  )

  const fanartImage = zip?.images?.find(
    (image: { coverType: string }) => image.coverType === 'Fanart',
  )

  return (
    <section className='relative aspect-video h-full brightness-90'>
      <img
        src={
          fanartImage?.url ||
          anime.data.images.jpg.large_image_url ||
          anime.data.images.jpg.image_url
        }
        alt={anime.data.title_english || anime.data.title}
        className='absolute inset-0 object-cover w-full h-full'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent' />
      <motion.button
        whileTap={{ scale: 0.95 }}
        className='absolute p-3 top-3 right-8 rounded-full bg-sd/40 backdrop-blur-sm border-none hover:bg-sd/70 cursor-pointer'
        onClick={() => router.history.back()}
      >
        <X className='size-5 text-white' />
      </motion.button>

      <div className='absolute bottom-8 left-8 right-8'>
        {logoImage ? (
          <img className='object-cover w-[300px] pb-4' src={logoImage?.url} />
        ) : (
          <h2 className='text-4xl font-bold text-white mb-3'>
            {anime.data.title_english || anime.data.title}
          </h2>
        )}
        <section className='flex items-center justify-center gap-4 mb-4 w-[300px]'>
          <PlayButton />
          <motion.button
            whileTap={{ scale: 0.95 }}
            className='p-3 rounded-full bg-white backdrop-blur-sm border-none hover:bg-white/80 cursor-pointer'
            title='Add to a list'
          >
            <HeartPlus className='size-5 text-black' />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className='p-3 rounded-full bg-white backdrop-blur-sm border-none hover:bg-white/80 cursor-pointer'
            title='Drop it'
          >
            <Trash2 className='size-5 text-black' />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className='p-3 rounded-full bg-white backdrop-blur-sm border-none hover:bg-white/80 cursor-pointer'
            title='Restart watch'
          >
            <ListRestart className='size-5 text-black' />
          </motion.button>
        </section>
        <p className='text-white/80 w-1/3 line-clamp-3'>
          {anime.data.synopsis}
        </p>
        <Badges categories={categories} />
      </div>
    </section>
  )
}
