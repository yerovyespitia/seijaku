import { Card as LoadingCard } from './loading-card'

type CardsProps = {
  videos?: number
}

export const Loading = ({ videos = 12 }: CardsProps) => {
  return (
    <section className='pt-6'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
        {[...Array(videos)].map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    </section>
  )
}
