import { motion } from 'framer-motion'

type BadgeProps = {
  categories: string[]
}

export const Badges = ({ categories }: BadgeProps) => {
  return (
    <ul className='flex items-center gap-2'>
      {categories.map((category, index) => (
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          key={category}
          className='border border-txtGray rounded-md w-fit px-2 py-0.5 text-xs mb-3'
        >
          {category}
        </motion.li>
      ))}
    </ul>
  )
}
