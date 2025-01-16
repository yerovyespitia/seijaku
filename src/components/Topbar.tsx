import { useState } from 'react'
import { Bell, Search, Settings, User } from 'lucide-react'

export const Topbar = () => {
  const [activeTab, setActiveTab] = useState('Home')

  const tabs = ['Home', 'Search', 'My List']

  return (
    <section className="flex-1 overflow-auto sticky top-0 z-10">
      <div
        data-tauri-drag-region
        className="w-full items-center border-b border-sd bg-sd h-16 flex justify-center text-sm font-medium"
      >
        <div className="flex items-center gap-2">
          {tabs.map((tab) => (
            <button
              className={`px-9 py-3 rounded-full transition-colors ${activeTab === tab ? `text-white bg-sd font-semibold` : `text-txtGray/70 hover:bg-sd hover:text-white`}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="absolute right-6">
          <div className="flex items-center space-x-4 justify-end">
            <Search className="size-4 text-txtGray hover:text-white cursor-pointer" />
            <Bell className="size-4 text-txtGray hover:text-white cursor-pointer" />
            <User className="size-4 text-txtGray hover:text-white cursor-pointer" />
            <Settings className="size-4 text-txtGray hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
}
