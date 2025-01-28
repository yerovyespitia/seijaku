import { useState } from 'react'
import { Searchbar } from '@/components/Searchbar'
import { PosterGallery } from '@/components/PosterGallery'
import { Layout } from '@/components/Layout'
import { useFind } from '@/utils/useJikan'
import { Jikan } from '@/types/jikan'
import { SkeletonPosterGallery } from '@/components/SkeletonPosterGallery'

export default function Search() {
  const [search, setSearch] = useState('')
  const { data, isFetching } = useFind(search, 25)
  console.log(data)

  return (
    <Layout>
      <Searchbar
        search={search}
        setSearch={setSearch}
      />
      {isFetching ? (
        <SkeletonPosterGallery videos={32} />
      ) : (
        <PosterGallery animes={data as Jikan} />
      )}
    </Layout>
  )
}
