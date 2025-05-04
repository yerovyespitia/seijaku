import { createFileRoute } from '@tanstack/react-router'
import { ErrorPage } from '@/Error'
import { Layout } from '@/components/Layout'
import { SkeletonPosterGallery } from '@/components/SkeletonPosterGallery'
import { useEffect, useState } from 'react'
import { Searchbar } from '@/components/Searchbar'
import { PosterGallery } from '@/components/PosterGallery'
import { useFind } from '@/queries/useData'
import { Jikan } from '@/types/jikan'

export const Route = createFileRoute('/search')({
  component: RouteComponent,
  pendingComponent: () => (
    <Layout>
      <div className='py-6'>
        <SkeletonPosterGallery videos={48} />
      </div>
    </Layout>
  ),
  errorComponent: () => (
    <div className='px-6'>
      <ErrorPage />
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
        <SkeletonPosterGallery videos={32} />
      ) : (
        <PosterGallery animes={data as Jikan} />
      )}
    </Layout>
  )
}
