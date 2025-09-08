import { LucideIcon } from 'lucide-react'

type InfoBarProps = {
  text?: string
  icon?: LucideIcon
  type?: 'status'
  isAiring?: boolean
}

export function Infobar({ items }: { items: (InfoBarProps | null)[] }) {
  return (
    <div className='flex items-center gap-3 my-2'>
      {items
        .filter((item): item is InfoBarProps => item !== null)
        .map((item, index) => (
          <div key={index} className='flex items-center gap-1'>
            {item.type === 'status' ? (
              <div
                className={`size-3 rounded-full ${item.isAiring ? 'bg-green-500' : 'bg-red-500'}`}
              />
            ) : (
              <>
                {item.icon && <item.icon className='size-4 text-gray-200' />}
                <p className='text-sm text-gray-200 font-medium'>{item.text}</p>
              </>
            )}
          </div>
        ))}
    </div>
  )
}
