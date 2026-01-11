import { Loading as Poster } from '@/components/poster/Loading'

type PosterGalleryProps = {
  videos: number
}

export const Loading = ({ videos }: PosterGalleryProps) => {
  return (
    <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
      {[...Array(videos)].map((_, i) => (
        <Poster key={i} />
      ))}
    </div>
  )
}
