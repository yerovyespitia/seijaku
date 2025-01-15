type AnimeSliderProps = {
  title: string
  videos: number
}

export const AnimeSlider = ({ title, videos }: AnimeSliderProps) => {
  return (
    <div className="p-6">
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 text-txtGray">{title}</h1>
        <button className="px-5 py-3 mx-1 text-sm font-medium rounded-md text-txtGray/70 hover:bg-secondary hover:text-white">
          Show More
        </button>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(videos)].map((_, i) => (
          <div
            key={i}
            className="bg-secondary aspect-video rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  )
}
