import { Sparkles, Grid, Clock, CalendarDays } from 'lucide-react'

export const Sidebar = () => {
  const sidebarItems = [
    { name: 'Featured', icon: Sparkles },
    { name: 'Genres', icon: Grid },
    { name: 'New Releases', icon: Clock },
    { name: 'Coming Soon', icon: CalendarDays },
  ]
  return (
    <div className="w-48 bg-[#1B1E28] p-4 border-r border-[#292C35]">
      <h2 className="font-semibold mb-4 text-[#A6ACCD]">Browse</h2>
      <ul>
        {sidebarItems.map((item) => (
          <li
            key={item.name}
            className="mb-2 text-sm cursor-pointer transition-colors hover:bg-[#292C35] hover:text-white rounded-lg p-2"
          >
            <div className="flex items-center space-x-2 text-[#A6ACCD]/70 hover:text-white">
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
