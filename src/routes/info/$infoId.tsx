import { createFileRoute } from '@tanstack/react-router'
import { ErrorPage } from '@/Error'
import { Layout } from '@/components/Layout'
import { useDetails } from '@/queries/useJikan'
import { SkeletonHero } from '@/components/SkeletonHero'
import { Banner } from '@/components/Banner'
import { SkeletonCards } from '@/components/SkeletonCards'
import { useAnimeZip } from '@/queries/useAniZip'

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

  let numId = Number(infoId)
  const { data: zip, isLoading: loadingZip } = useAnimeZip(numId)
  const { data: details, isLoading: loadingDetails } = useDetails(numId)

  if (loadingDetails || !details || loadingZip) {
    return (
      <>
        <SkeletonHero />
        <Layout>
          <SkeletonCards />
        </Layout>
      </>
    )
  }

  console.log('details', details)
  console.log('zip', zip)

  return (
    <>
      <Banner
        anime={details}
        zip={zip}
      />
      <Layout>
        <SkeletonCards videos={40} />
      </Layout>
    </>
  )
}
