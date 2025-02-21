import { createFileRoute } from '@tanstack/react-router'
import { ErrorPage } from '@/Error'
import { Layout } from '@/components/Layout'
import { useDetails } from '@/queries/useJikan'
import { SkeletonHero } from '@/components/SkeletonHero'
import { Banner } from '@/components/Banner'
import { SkeletonCards } from '@/components/SkeletonCards'

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
  const { data: details, isLoading: loadingDetails } = useDetails(
    Number(infoId)
  )

  if (loadingDetails || !details) {
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

  return (
    <>
      <Banner anime={details} />
      <Layout>
        <SkeletonCards videos={40} />
      </Layout>
    </>
  )
}
