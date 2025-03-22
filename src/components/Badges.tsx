type BadgeProps = {
  categories: string[]
}

export const Badges = ({ categories }: BadgeProps) => {
  return (
    <ul className='flex items-center gap-2'>
      {categories.map((category) => (
        <li
          key={category}
          className='border border-txtGray rounded-full w-fit px-2 py-0.5 text-xs mb-3'
        >
          {category}
        </li>
      ))}
    </ul>
  )
}
