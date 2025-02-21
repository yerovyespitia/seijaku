import { SkeletonCard } from './SkeletonCard'

type CardsProps = {
  videos?: number
}

export const SkeletonCards = ({ videos = 12 }: CardsProps) => {
  return (
    <section className='pt-6'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {[...Array(videos)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </section>
  )
}
