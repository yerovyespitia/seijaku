import { useState } from 'react'
import { Bell } from 'lucide-react'

type NotificationsDropdownProps = {
  className?: string
}

export const NotificationsDropdown = ({
  className = '',
}: NotificationsDropdownProps) => {
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setShowNotifications(true)}
      onMouseLeave={() => setShowNotifications(false)}
    >
      <div className='cursor-pointer'>
        <Bell className='size-4 text-txtGray hover:text-white' />
      </div>

      {showNotifications && (
        <div
          className='fixed right-6 top-20 w-80 bg-sd border border-gray-700 rounded-lg shadow-lg z-[99999]'
          onMouseEnter={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
        >
          <div className='p-4'>
            <div className='flex items-center justify-between mb-3'>
              <h3 className='text-white font-semibold'>Notifications</h3>
              <button className='text-txtGray hover:text-white text-sm'>
                Mark all as read
              </button>
            </div>

            <div className='space-y-3 max-h-64 overflow-y-auto'>
              <div className='flex items-start space-x-3 p-2 rounded hover:bg-gray-700/50'>
                <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                <div className='flex-1'>
                  <p className='text-white text-sm'>New episode available</p>
                  <p className='text-txtGray text-xs'>
                    Your favorite show has a new episode
                  </p>
                  <p className='text-txtGray text-xs mt-1'>2 hours ago</p>
                </div>
              </div>

              <div className='flex items-start space-x-3 p-2 rounded hover:bg-gray-700/50'>
                <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
                <div className='flex-1'>
                  <p className='text-white text-sm'>Download completed</p>
                  <p className='text-txtGray text-xs'>
                    Your download has finished
                  </p>
                  <p className='text-txtGray text-xs mt-1'>1 day ago</p>
                </div>
              </div>

              <div className='flex items-start space-x-3 p-2 rounded hover:bg-gray-700/50'>
                <div className='w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0'></div>
                <div className='flex-1'>
                  <p className='text-white text-sm'>System update</p>
                  <p className='text-txtGray text-xs'>
                    A new version is available
                  </p>
                  <p className='text-txtGray text-xs mt-1'>3 days ago</p>
                </div>
              </div>
            </div>

            <div className='mt-3 pt-3 border-t border-gray-700'>
              <button className='text-blue-400 hover:text-blue-300 text-sm block text-center w-full'>
                View all notifications
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
