type BadgeProps = {
  items: string[] | (string | number)[]
}

export const Badges = ({ items }: BadgeProps) => {
  return (
    <ul className='flex items-center gap-2'>
      {items.map((category) => (
        <li
          key={category}
          className='bg-white/20 text-gray-300 font-medium rounded-full w-fit px-2 py-0.5 text-xs mt-3 hover:bg-white/40 hover:text-white transition-all duration-150'
        >
          {category}
        </li>
      ))}
    </ul>
  )
}
