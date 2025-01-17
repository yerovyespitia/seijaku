type PosterSliderProps = {
  title: string
  videos: number
}

export const PosterSlider = ({ title, videos }: PosterSliderProps) => {
  return (
    <div className="pt-6">
      <section className="flex justify-between items-center pb-4">
        <h1 className="text-2xl font-bold text-txtGray mb-0">{title}</h1>
        <button className="px-5 py-2 text-sm font-medium rounded-md text-txtGray/70 bg-sd hover:text-zinc-300">
          View More
        </button>
      </section>
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {[...Array(videos)].map((_, i) => (
          <div
            key={i}
            className="bg-sd w-full h-0 pb-[150%] rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  )
}
