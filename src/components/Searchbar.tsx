import { useState } from 'react'
import { Trash } from 'lucide-react'

export const Searchbar = () => {
  const [search, setSearch] = useState('')
  const [selectedOption, setSelectedOption] = useState({
    genre: '',
    format: '',
    status: '',
  })

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
    })
  }

  return (
    <section className='py-6 flex items-center gap-4'>
      <input
        type='text'
        className='rounded-lg outline-none px-4 bg-sd h-12 w-full text-txtGray'
        placeholder='Search an anime...'
        value={search}
        onChange={handleSearchChange}
      />
      <select
        name='genre'
        id='genre'
        value={selectedOption.genre}
        onChange={handleSelectChange}
        className='h-12 bg-sd w-fit text-txtGray rounded-lg px-4 outline-none cursor-pointer hover:bg-sd/70'
      >
        <option
          value=''
          selected
          disabled
          defaultValue={selectedOption.genre}
        >
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
        className='h-12 bg-sd w-fit text-txtGray rounded-lg px-4 outline-none cursor-pointer hover:bg-sd/70'
      >
        <option
          value=''
          selected
          disabled
          defaultValue={selectedOption.format}
        >
          Choose a format
        </option>
        <option value='tvshot'>TV Show</option>
        <option value='movie'>Movie</option>
        <option value='ova'>OVA</option>
      </select>
      <select
        name='status'
        id='status'
        value={selectedOption.status}
        onChange={handleSelectChange}
        className='h-12 bg-sd w-fit text-txtGray rounded-lg px-4 outline-none cursor-pointer hover:bg-sd/70'
      >
        <option
          value=''
          selected
          disabled
          defaultValue={selectedOption.status}
        >
          Choose a status
        </option>
        <option value='airing'>Airing</option>
        <option value='finished'>Finished</option>
        <option value='notyet'>Not Yet Aired</option>
      </select>
      <button
        onClick={resetSelects}
        className='h-12 bg-sd rounded-lg px-4 text-txtGray hover:bg-sd/70'
      >
        <Trash size={18} />
      </button>
    </section>
  )
}
