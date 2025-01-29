import { SkeletonPoster } from './SkeletonPoster'

type PosterGalleryProps = {
  videos: number
}

export const SkeletonPosterGallery = ({ videos }: PosterGalleryProps) => {
  return (
    <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
      {[...Array(videos)].map((_, i) => (
        <SkeletonPoster key={i} />
      ))}
    </div>
  )
}
