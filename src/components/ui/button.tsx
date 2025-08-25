export const Button = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <button className='flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-md text-white/80 bg-sd hover:bg-sd/70 hover:text-white cursor-pointer'>
      {children}
    </button>
  )
}
