import { useRouter } from '@tanstack/react-router'
import {
  HeartPlus,
  ListRestart,
  Trash2,
  X,
  TrendingUp,
  Calendar,
  CheckCheck,
  List,
  Trophy,
  Hourglass,
} from 'lucide-react'
import { Details } from '@/types/jikan'
import { AniZip } from '@/types/zip'
import { Badges } from '@/components/badges'
import { PlayButton } from '@/components/ui/play-button'
import { Infobar } from '../infobar'

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

  const details = [
    {
      text: `${anime.data.airing ? 'Airing' : 'Finished'}`,
      icon: anime.data.airing ? Hourglass : CheckCheck,
    },
    zip.episodeCount
      ? { text: `${zip.episodeCount} episodes`, icon: List }
      : null,
    anime.data.rank
      ? { text: `${anime.data.rank} Ranked`, icon: TrendingUp }
      : null,
    anime.data.score
      ? { text: `${anime.data.score.toPrecision(2)} Score`, icon: Trophy }
      : null,
    anime.data.year ? { text: `${anime.data.year}`, icon: Calendar } : null,
  ].filter(Boolean)

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
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />
      <button
        className='btn-glass-dark absolute p-3 top-3 right-8 animate-pressed'
        onClick={() => router.history.back()}
      >
        <X className='size-5' />
      </button>

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
        <p className='text-white w-1/3 line-clamp-3'>{anime.data.synopsis}</p>
        <Badges items={categories} />
      </div>
    </section>
  )
}
