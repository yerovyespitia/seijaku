import { Trash } from 'lucide-react'

type SelectedOption = {
  genre: string
  format: string
  status: string
  year: string
}

type SearchbarProps = {
  search: string
  setSearch: (value: string) => void
  selectedOption: SelectedOption
  setSelectedOption: (value: SelectedOption) => void
}

export const Searchbar = ({
  search,
  setSearch,
  selectedOption,
  setSelectedOption,
}: SearchbarProps) => {
  const currentYear = new Date().getFullYear()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption({
      ...selectedOption,
      [e.target.name]: e.target.value,
    })
  }

  const resetSelects = () => {
    setSearch('')
    setSelectedOption({
      genre: '',
      format: '',
      status: '',
      year: '',
    })
  }

  return (
    <section className='py-6 flex items-center gap-4'>
      <input
        type='text'
        className='rounded-full outline-none px-4 bg-sd h-12 w-full text-txtGray'
        placeholder='Search an anime...'
        value={search}
        onChange={handleSearchChange}
      />
      <select
        name='genre'
        id='genre'
        value={selectedOption.genre}
        onChange={handleSelectChange}
        className='h-12 bg-sd w-fit text-white/80 rounded-full px-5 outline-none cursor-pointer hover:bg-sd/70'
      >
        <option value='' disabled defaultValue={selectedOption.genre}>
          Choose a genre
        </option>
        <option value='action'>Action</option>
        <option value='adventure'>Adventure</option>
        <option value='comedy'>Comedy</option>
        <option value='drama'>Drama</option>
        <option value='fantasy'>Fantasy</option>
      </select>
      <select
        name='format'
        id='format'
        value={selectedOption.format}
        onChange={handleSelectChange}
        className='h-12 bg-sd w-fit text-white/80 rounded-full px-5 outline-none cursor-pointer hover:bg-sd/70'
      >
        <option value='' disabled defaultValue={selectedOption.format}>
          Choose a format
        </option>
        <option value='tv'>TV</option>
        <option value='movie'>Movie</option>
        <option value='special'>Special</option>
        <option value='ona'>ONA</option>
        <option value='ova'>OVA</option>
        <option value='music'>Music</option>
        <option value='cm'>CM</option>
        <option value='pv'>PV</option>
        <option value='tv_special'>TV Special</option>
      </select>
      <select
        name='status'
        id='status'
        value={selectedOption.status}
        onChange={handleSelectChange}
        className='h-12 bg-sd w-fit text-white/80 rounded-full px-5 outline-none cursor-pointer hover:bg-sd/70'
      >
        <option value='' disabled defaultValue={selectedOption.status}>
          Choose a status
        </option>
        <option value='airing'>Airing</option>
        <option value='complete'>Complete</option>
        <option value='upcoming'>Upcoming</option>
      </select>
      <select
        name='year'
        id='year'
        value={selectedOption.year}
        onChange={handleSelectChange}
        className='h-12 bg-sd w-fit text-white/80 rounded-full px-5 outline-none cursor-pointer hover:bg-sd/70'
      >
        <option value='' disabled defaultValue={selectedOption.year}>
          Choose a year
        </option>
        {Array.from({ length: 40 }).map((_, year) => (
          <option key={year} value={currentYear - year}>
            {currentYear - year}
          </option>
        ))}
      </select>
      <button
        onClick={resetSelects}
        className='h-12 bg-sd rounded-full px-4 text-white/80 hover:bg-sd/70 cursor-pointer'
      >
        <Trash size={18} />
      </button>
    </section>
  )
}
