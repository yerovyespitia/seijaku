type CardGalleryProps = {
  videos: number
}

export const CardGallery = ({ videos }: CardGalleryProps) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {[...Array(videos)].map((_, i) => (
        <div
          key={i}
          className='bg-sd aspect-video rounded-lg animate-pulse'
        ></div>
      ))}
    </div>
  )
}
