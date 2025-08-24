import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Settings, User, Users } from 'lucide-react'
import { Notifications } from '@/components/notifications'

const tabs = [
  { href: '/', label: 'Home' },
  { href: '/search', label: 'Search' },
  { href: '/collections', label: 'Collections' },
]

export const Route = createRootRoute({
  component: () => (
    <>
      <section className='flex-1 overflow-auto sticky top-0 z-90'>
        <div
          data-tauri-drag-region
          className='w-full items-center bg-sd h-16 flex justify-center text-sm font-medium'
        >
          <div className='flex items-center gap-2'>
            {tabs.map((tab) => (
              <Link
                key={tab.label}
                to={`${tab.href}`}
                className='px-5 py-3 rounded-full transition-colors [&.active]:text-white [&.active]:bg-sd font-semibold text-txtGray/70 hover:bg-sd hover:text-white'
              >
                {tab.label}
              </Link>
            ))}
          </div>
          <div className='absolute right-6'>
            <div className='flex items-center space-x-4 justify-end'>
              <Notifications />

              <Link to='/' title='Watch together'>
                <Users className='size-4 text-txtGray hover:text-white cursor-pointer' />
              </Link>
              <Link to='/account' title='Sign in'>
                <User className='size-4 text-txtGray hover:text-white cursor-pointer' />
              </Link>
              <Link to='/settings' title='Settings'>
                <Settings className='size-4 text-txtGray hover:text-white cursor-pointer' />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
