export function Tooltip({
  children,
  text,
}: {
  children: React.ReactNode
  text: string
}) {
  return (
    <div className='relative inline-block group'>
      <span className='font-medium text-sm invisible group-hover:visible bg-white/20 backdrop-blur-sm border-none hover:bg-white/30 text-white text-center rounded-full px-3 py-1 absolute z-10 top-full left-1/2 transform -translate-x-1/2 mt-3 whitespace-nowrap before:content-[""] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-5 before:border-solid before:border-b-white/20 before:border-r-transparent before:border-t-transparent before:border-l-transparent'>
        {text}
      </span>
      {children}
    </div>
  )
}
