import { Jikan } from '@/types/jikan'
import { Poster } from '@/components/poster'

type PosterGalleryProps = {
  animes: Jikan
}

export const PosterGallery = ({ animes }: PosterGalleryProps) => {
  return (
    <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
      {animes.data.map((anime) => (
        <Poster key={anime.mal_id} anime={anime} />
      ))}
    </div>
  )
}
