import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

type CardSliderProps = {
  title: string
  videos?: number
}

export const CardSlider = ({ title, videos = 4 }: CardSliderProps) => {
  return (
    <div className='pt-6'>
      <section className='flex justify-between items-center pb-4'>
        <h1 className='text-2xl font-bold text-txtGray mb-0'>{title}</h1>
        <Link to='/category/$categoryId' params={{ categoryId: title }}>
          <Button>View more</Button>
        </Link>
      </section>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {[...Array(videos)].map((_, i) => (
          <div
            key={i}
            className='bg-sd aspect-video rounded-lg animate-pulse'
          ></div>
        ))}
      </div>
    </div>
  )
}
