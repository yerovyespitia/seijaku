import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '@/components/errors/not-found'
import { Layout } from '@/components/layouts/main'
import { Loading as PGLoading } from '@/components/poster-gallery/loading'
import { useEffect, useState } from 'react'
import { Searchbar } from '@/components/searchbar'
import { PosterGallery } from '@/components/poster-gallery'
import { useFind } from '@/queries/useQuery'
import { Jikan } from '@/types/jikan'

export const Route = createFileRoute('/search')({
  component: RouteComponent,
  pendingComponent: () => (
    <Layout>
      <div className='py-6'>
        <PGLoading videos={48} />
      </div>
    </Layout>
  ),
  errorComponent: () => (
    <div className='px-6'>
      <NotFound />
    </div>
  ),
})

function RouteComponent() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [selectedOption, setSelectedOption] = useState({
    genre: '',
    format: '',
    status: '',
    year: '',
  })
  const [search, setSearch] = useState('')
  const { data, isFetching } = useFind(search, 25, selectedOption)
  console.log(data)

  return (
    <Layout>
      <Searchbar
        search={search}
        setSearch={setSearch}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      {isFetching ? (
        <PGLoading videos={32} />
      ) : (
        <PosterGallery animes={data as Jikan} />
      )}
    </Layout>
  )
}
