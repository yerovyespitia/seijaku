import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globals.css'
import { Bell, ChevronLeft, ChevronRight, Search, User } from 'lucide-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div
      data-tauri-drag-region
      className="flex items-center justify-end p-2 border-b border-secondary"
    >
      <div className="flex text-sm font-medium">
        <button className="text-txtGray border border-secondary px-6 py-[2px] rounded-s">
          Home
        </button>
        <button className="text-txtGray border border-secondary px-6 py-[2px]">
          Tv shows
        </button>
        <button className="text-txtGray border border-secondary px-6 py-[2px]">
          Movies
        </button>
        <button className="text-txtGray border border-secondary px-6 py-[2px] rounded-e">
          My list
        </button>
        {/* <button
          className={`px-5 py-3 rounded-md transition-colors text-white bg-secondary hover:bg-secondary hover:text-white`}
        >
          Home
        </button>
        <button
          className={`px-5 py-3 rounded-md transition-colors text-txtGray/70 hover:bg-secondary hover:text-white`}
        >
          Search
        </button>
        <button
          className={`px-5 py-3 rounded-md transition-colors text-txtGray/70 hover:bg-secondary hover:text-white`}
        >
          My List
        </button>
        <button
          className={`px-5 py-3 rounded-md transition-colors text-txtGray/70 hover:bg-secondary hover:text-white`}
        >
          Settings
        </button> */}
      </div>
      <div className="flex items-center space-x-4 w-1/3 justify-end">
        <ChevronLeft className="w-4 h-4 text-[#A6ACCD] hover:text-white cursor-pointer" />
        <ChevronRight className="w-4 h-4 text-[#A6ACCD] hover:text-white cursor-pointer" />
        <Search className="w-4 h-4 text-[#A6ACCD] hover:text-white cursor-pointer" />
        <Bell className="w-4 h-4 text-[#A6ACCD] hover:text-white cursor-pointer" />
        <User className="w-4 h-4 text-[#A6ACCD] hover:text-white cursor-pointer" />
      </div>
    </div>
    <App />
  </React.StrictMode>,
)
