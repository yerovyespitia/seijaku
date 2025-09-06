import { Card as LoadingCard } from '@/components/cards/card-slider/loading-card'

type CardSliderProps = {
  videos?: number
}

export const Loading = ({ videos = 4 }: CardSliderProps) => {
  return (
    <div className='pt-6'>
      <section className='flex justify-between items-center pb-4'>
        <div className='w-[155px] h-[32px] bg-sd rounded-md animate-pulse' />
        <div className='w-[109px] h-[36px] bg-sd rounded-md animate-pulse' />
      </section>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {[...Array(videos)].map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    </div>
  )
}
