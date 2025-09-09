import { useRouter } from '@tanstack/react-router'
import {
  HeartPlus,
  ListRestart,
  Trash2,
  X,
  TrendingUp,
  Calendar,
  List,
  Trophy,
  Play,
} from 'lucide-react'
import { Details } from '@/types/jikan'
import { AniZip } from '@/types/zip'
import { Badges } from '@/components/badges'
import { IconButton } from '@/components/ui/icon-button'
import { Infobar } from '@/components/infobar'

type BannerProps = {
  jikan: Details
  zip: AniZip
}

export const Banner = ({ jikan, zip }: BannerProps) => {
  const router = useRouter()
  const categories = jikan.data.genres.map((genre) => genre.name)

  const logoImage = zip?.images?.find(
    (image: { coverType: string }) => image.coverType === 'Clearlogo',
  )

  const fanartImage = zip?.images?.find(
    (image: { coverType: string }) => image.coverType === 'Fanart',
  )

  const poster = zip?.images?.find(
    (image: { coverType: string }) => image.coverType === 'Poster',
  )

  const details = [
    {
      type: 'status' as const,
      isAiring: jikan.data.airing,
    },
    zip.episodeCount
      ? { text: `${zip.episodeCount} episodes`, icon: List }
      : null,
    jikan.data.rank
      ? { text: `${jikan.data.rank} Ranked`, icon: TrendingUp }
      : null,
    jikan.data.score
      ? { text: `${jikan.data.score.toPrecision(2)} Score`, icon: Trophy }
      : null,
    jikan.data.year ? { text: `${jikan.data.year}`, icon: Calendar } : null,
  ].filter(Boolean)

  console.log('poster', poster)

  return (
    <section>
      <header className='relative w-full h-[40vh] md:h-[50vh]'>
        <img
          src={
            fanartImage?.url ||
            jikan?.data?.trailer?.images?.maximum_image_url ||
            jikan?.data?.trailer?.images?.large_image_url ||
            jikan.data.images.jpg.large_image_url ||
            jikan.data.images.jpg.image_url
          }
          alt='Banner'
          className='object-cover object-center brightness-75 w-full h-[40vh] md:h-[50vh]'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-pm to-transparent' />
        <button
          className='btn-glass-dark absolute p-3 top-3 right-8 animate-pressed'
          onClick={() => router.history.back()}
        >
          <X className='size-5' />
        </button>
      </header>

      <div className='flex flex-row gap-6 md:gap-8 px-6 pb-6 absolute -mt-40'>
        <div className='shrink-0 w-[250px] h-[400px] md:w-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg shadow-black/30'>
          {poster || jikan ? (
            <img
              className='w-[250px] h-[400px] md:w-[300px] md:h-[450px] object-cover'
              src={
                poster?.url ||
                jikan.data.images.jpg.large_image_url ||
                jikan.data.images.jpg.image_url
              }
              alt='Poster'
            />
          ) : (
            <div className='w-[250px] h-[400px] md:w-[300px] md:h-[450px] bg-pm' />
          )}
        </div>

        <div className='flex flex-col max-w-[550px]'>
          {logoImage ? (
            <img className='object-cover w-[300px] pb-4' src={logoImage?.url} />
          ) : (
            <h2 className='text-4xl font-bold text-white mb-3'>
              {jikan.data.title_english || jikan.data.title}
            </h2>
          )}
          <section className='flex items-center gap-4 mb-4'>
            <IconButton text='Play' icon={Play} />
            <button className='btn-glass animate-pressed' title='Add to a list'>
              <HeartPlus className='size-5 text-white' />
            </button>
            <button className='btn-glass animate-pressed' title='Drop it'>
              <Trash2 className='size-5 text-white' />
            </button>
            <button className='btn-glass animate-pressed' title='Restart watch'>
              <ListRestart className='size-5 text-white' />
            </button>
          </section>
          <Infobar items={details} />
          <p className='text-gray-400 line-clamp-3'>{jikan.data.synopsis}</p>
          <Badges items={categories} />
        </div>
      </div>
    </section>
  )
}
