import { useState } from 'react'
import { AnimeSlider } from './AnimeSlider'

export const Topbar = () => {
  const [activeTab, setActiveTab] = useState('Home')

  const tabs = ['Home', 'Search', 'My List', 'Settings']

  return (
    <section className="flex-1 overflow-auto">
      <div className="flex justify-center bg-primary border-b border-secondary p-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-3 mx-1 text-sm font-medium rounded-md transition-colors ${
              activeTab === tab
                ? 'text-white bg-secondary font-semibold'
                : 'text-txtGray/70 hover:bg-secondary hover:text-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimeSlider title="Continue Watching" videos={4} />
      <AnimeSlider title="Trending Now" videos={8} />
      <AnimeSlider title="Top Rated" videos={8} />
      <AnimeSlider title="Drama" videos={8} />
    </section>
  )
}
