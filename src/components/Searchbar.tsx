export const Searchbar = () => {
  return (
    <section className='pt-6 flex items-center gap-4'>
      <input
        type='text'
        className='rounded-lg outline-none px-4 bg-sd h-12 w-full text-txtGray'
        placeholder='Search an anime...'
      />
    </section>
  )
}
