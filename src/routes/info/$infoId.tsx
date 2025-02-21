import { createFileRoute } from '@tanstack/react-router'
import { ErrorPage } from '@/Error'
import { Layout } from '@/components/Layout'
import { useDetails } from '@/utils/useJikan'
import { SkeletonHero } from '@/components/SkeletonHero'
import { Banner } from '@/components/Banner'

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
    return <SkeletonHero />
  }

  console.log('details', details)

  return (
    <>
      <Banner anime={details} />
      <Layout>
        <section className='pt-6'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className='bg-sd aspect-video rounded-lg animate-pulse'
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}
