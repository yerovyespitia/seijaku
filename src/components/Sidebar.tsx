import { Play, AppWindow, ChartNoAxesColumn, Settings2 } from 'lucide-react'

export const Sidebar = () => {
  const sidebarItems = [
    { name: 'General', icon: Settings2 },
    { name: 'Video player', icon: Play },
    { name: 'Torrents', icon: ChartNoAxesColumn },
    { name: 'Interface', icon: AppWindow },
  ]

  return (
    <div className='w-52 h-screen overflow-auto fixed left-0 bg-[#1B1E28] p-4 border-r border-[#292C35]'>
      <h2 className='font-semibold mb-4 text-[#A6ACCD]'>Settings</h2>
      <ul>
        {sidebarItems.map((item) => (
          <li
            key={item.name}
            className='mb-2 text-sm cursor-pointer transition-colors hover:bg-[#292C35] hover:text-white rounded-lg p-2'
          >
            <div className='flex items-center space-x-2 text-[#A6ACCD]/70 hover:text-white'>
              <item.icon className='w-4 h-4' />
              <span>{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
