import React from 'react'
import { LucideIcon } from 'lucide-react'

type IconButtonProps = {
  icon: LucideIcon
  size?: number
  fill?: string
  text: string
  strokeWidth?: number
}

export function IconButton({
  icon,
  size = 22,
  fill = 'black',
  text,
  strokeWidth = 4,
}: IconButtonProps) {
  return (
    <button className='btn-basic animate-pressed'>
      {React.createElement(icon, { size, fill, strokeWidth })}
      <p className='font-semibold'>{text}</p>
    </button>
  )
}
