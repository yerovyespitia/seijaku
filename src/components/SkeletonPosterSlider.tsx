type PosterSliderProps = {
  videos?: number
}

export const SkeletonPosterSlider = ({ videos = 8 }: PosterSliderProps) => {
  return (
    <div className='pt-6'>
      <section className='flex justify-between items-center pb-4'>
        <div className='w-[155px] h-[32px] bg-sd rounded-md animate-pulse' />
        <div className='w-[109px] h-[36px] bg-sd rounded-md animate-pulse' />
      </section>
      <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
        {[...Array(videos)].map((_, i) => (
          <div
            key={i}
            className='bg-sd w-full h-0 pb-[150%] rounded-lg animate-pulse'
          ></div>
        ))}
      </div>
    </div>
  )
}
