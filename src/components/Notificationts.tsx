import { Clock, Settings } from 'lucide-react'

export const Notifications = () => {
  return (
    <section className='bg-sd rounded-lg h-auto w-[280px]'>
      <h2 className='p-3 text-md mb-0 font-medium text-txtGray border-b border-txtGray/20'>
        Notifications
      </h2>
      <div className='p-2'>
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            className='flex items-center gap-3 p-3 w-full rounded-md hover:bg-pm/50 cursor-pointer'
            key={i}
          >
            <Clock size={18} />
            <p className='text-txtGray text-sm'>
              New Episode: "Naruto Shippuden"
            </p>
          </div>
        ))}
      </div>
      <footer className='flex items-center gap-3 p-3 text-md mb-0 hover:bg-pm/50 font-medium text-txtGray border-t border-txtGray/20 cursor-pointer'>
        <Settings size={18} />
        Notification Settings
      </footer>
    </section>
  )
}
