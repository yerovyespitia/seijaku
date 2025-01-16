import { Bell, ChevronLeft, ChevronRight, Search, User } from 'lucide-react'

export const Titlebar = () => {
  return (
    <section className="bg-[#1B1E28] p-2 flex items-center justify-between border-b border-[#292C35]">
      <div className="flex items-center space-x-4 w-1/3 justify-end">
        <ChevronLeft className="w-4 h-4 text-txtGray hover:text-white cursor-pointer" />
        <ChevronRight className="w-4 h-4 text-txtGray hover:text-white cursor-pointer" />
        <Search className="w-4 h-4 text-txtGray hover:text-white cursor-pointer" />
        <Bell className="w-4 h-4 text-txtGray hover:text-white cursor-pointer" />
        <User className="w-4 h-4 text-txtGray hover:text-white cursor-pointer" />
      </div>
    </section>
  )
}
