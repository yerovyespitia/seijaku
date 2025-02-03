export const Button = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <button className='flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-md text-txtGray/70 bg-sd hover:bg-sd/70 hover:text-zinc-300'>
      {children}
    </button>
  )
}
