import { useState } from 'react'

export const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0)

  return (
    <section className='relative bg-sd aspect-video'>
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-1/5 flex items-center justify-center'></div>
      <div className='absolute bottom-8 left-8 right-8'>
        <h2 className='text-4xl font-bold text-zinc-300 mb-3'>Lorem Ipsum</h2>
        <div className='flex items-center gap-2'>
          <p className='border border-txtGray rounded-md w-fit px-2 py-0.5 text-xs mb-3'>
            Drama
          </p>
          <p className='border border-txtGray rounded-md w-fit px-2 py-0.5 text-xs mb-3'>
            Horror
          </p>
          <p className='border border-txtGray rounded-md w-fit px-2 py-0.5 text-xs mb-3'>
            Mystery
          </p>
        </div>
        <p className='text-txtGray/90 w-1/3 line-clamp-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque,
          eius unde ut porro repudiandae nobis repellat, excepturi
          necessitatibus quod quia id velit dolores eos aspernatur laudantium
          illum autem culpa?
        </p>
      </div>
      <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`size-2 rounded-full ${
              index === currentVideo ? 'bg-white' : 'bg-white bg-opacity-50'
            } hover:bg-opacity-100 transition-all duration-300`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
