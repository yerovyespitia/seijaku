import { createFileRoute } from '@tanstack/react-router'
import { ErrorPage } from '@/Error'
import { Layout } from '@/components/Layout'
import { Banner } from '@/components/Banner'
import { useDetails } from '@/utils/useJikan'
import { Details } from '@/types/jikan'
import { SkeletonHero } from '@/components/SkeletonHero'
import { useListOfEpisodes } from '@/utils/useZenAniZip'

export const Route = createFileRoute('/info/$infoId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      infoId: params.infoId,
    }
  },
  pendingComponent: () => <SkeletonHero />,
  errorComponent: () => (
    <div className='px-6'>
      <ErrorPage />
    </div>
  ),
})

function RouteComponent() {
  const { infoId } = Route.useLoaderData()
  const { data: anime, isLoading: loadingDetails } = useDetails(Number(infoId))
  const { data: list, isLoading: loadingEpisodes } = useListOfEpisodes(
    Number(infoId)
  )
  console.log(anime as Details)
  console.log('ff', list)
  console.log('episodes', list.episodes)

  if (loadingDetails || loadingEpisodes || !anime || !list) {
    return <SkeletonHero />
  }

  return (
    <>
      <Banner anime={anime as Details} />
      <Layout>{infoId}</Layout>
    </>
  )
}
