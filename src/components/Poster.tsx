import { Anime } from '@/types/jikan'
import { motion } from 'framer-motion'

type PosterProps = { anime: Anime }

export const Poster = ({ anime }: PosterProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.85 }}
      transition={{ duration: 1 }}
      className='relative w-full h-0 pb-[150%] overflow-hidden rounded-md cursor-pointer'
    >
      <section className='absolute top-0 left-0 w-full h-full overflow-hidden rounded-md group cursor-pointer transition-transform duration-300 transform hover:scale-[1.03]'>
        <img
          className='w-full h-full object-cover'
          src={anime.images.jpg.large_image_url}
          alt={anime.title_english}
        />
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300' />
        <article className='hidden group-hover:flex justify-center items-center absolute inset-0 font-semibold text-center text-sm px-3 text-white transition-all duration-300'>
          {anime.title_english ? anime.title_english : anime.title}
        </article>
      </section>
    </motion.section>
  )
}
