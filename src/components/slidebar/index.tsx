import { Play, AppWindow, ChartNoAxesColumn, Settings2 } from 'lucide-react'

type SidebarProps = {
  selectedItem: string
  setSelectedItem: (item: string) => void
}

export const Sidebar = ({ selectedItem, setSelectedItem }: SidebarProps) => {
  const sidebarItems = [
    { name: 'General', icon: Settings2 },
    { name: 'Video player', icon: Play },
    { name: 'Torrents', icon: ChartNoAxesColumn },
    { name: 'Interface', icon: AppWindow },
  ]

  return (
    <aside className='w-60 h-screen overflow-auto fixed left-0 bg-pm p-4 border-r border-sd'>
      <h2 className='font-semibold mb-4 text-white'>Settings</h2>
      <ul>
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedItem(item.name)}
            className={`mb-2 w-full text-sm cursor-pointer transition-colors group hover:bg-sd rounded-lg p-2 ${selectedItem === item.name && 'bg-sd'}`}
          >
            <div
              className={`flex items-center space-x-2 text-[#A6ACCD]/70 group-hover:text-white ${selectedItem === item.name && 'text-white'}`}
            >
              <item.icon className='w-4 h-4' />
              <span>{item.name}</span>
            </div>
          </button>
        ))}
      </ul>
    </aside>
  )
}
