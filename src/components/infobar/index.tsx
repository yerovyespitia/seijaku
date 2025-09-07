import { LucideIcon } from 'lucide-react'

type InfoBarProps = {
  text: string
  icon: LucideIcon
}

export function Infobar({ items }: { items: (InfoBarProps | null)[] }) {
  return (
    <div className='flex items-center gap-4 my-2 text-sm text-white font-semibold'>
      {items
        .filter((item): item is InfoBarProps => item !== null)
        .map((item, index) => (
          <div key={index} className='flex items-center gap-1'>
            <item.icon className='size-4 text-white' />
            <p>{item.text}</p>
          </div>
        ))}
    </div>
  )
}
