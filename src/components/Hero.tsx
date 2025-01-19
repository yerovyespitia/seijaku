import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Badges } from './Badges'

export const Hero = () => {
  const totalVideos = 5
  const [currentVideo, setCurrentVideo] = useState(0)
  const categories = ['Drama', 'Horror', 'Mystery']

  const goToNextVideo = () => {
    setCurrentVideo((currentVideo + 1) % totalVideos)
  }

  const goToPreviosVideo = () => {
    setCurrentVideo((currentVideo - 1 + totalVideos) % totalVideos)
  }

  return (
    <section className='relative bg-sd aspect-video'>
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-1/5 flex items-center justify-center'></div>
      <div className='absolute bottom-8 left-8 right-8'>
        <h2 className='text-4xl font-bold text-zinc-300 mb-3'>Lorem Ipsum</h2>
        <Badges categories={categories} />
        <p className='text-txtGray/90 w-1/3 line-clamp-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque,
          eius unde ut porro repudiandae nobis repellat, excepturi
          necessitatibus quod quia id velit dolores eos aspernatur laudantium
          illum autem culpa?
        </p>
      </div>
      <button
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300'
        aria-label='Previous video'
        onClick={goToPreviosVideo}
      >
        <ChevronLeft className='size-6' />
      </button>
      <button
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300'
        aria-label='Next video'
        onClick={goToNextVideo}
      >
        <ChevronRight className='size-6' />
      </button>
      <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`size-2 rounded-full ${
              index === currentVideo ? 'bg-white' : 'bg-white/30'
            } hover:bg-white transition-all duration-300`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
