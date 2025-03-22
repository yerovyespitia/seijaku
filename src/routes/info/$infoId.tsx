import { createFileRoute } from '@tanstack/react-router'
import { ErrorPage } from '@/Error'
import { Layout } from '@/components/Layout'
import { useDetails } from '@/queries/useJikan'
import { SkeletonHero } from '@/components/SkeletonHero'
import { Banner } from '@/components/Banner'
import { SkeletonCards } from '@/components/SkeletonCards'
import { useAnimeZip } from '@/queries/useAniZip'
import { CardGallery } from '@/components/CardGallery'
import { AniZip } from '@/types/zip'
import { motion } from 'framer-motion'

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
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SkeletonHero />
        <Layout>
          <SkeletonCards />
        </Layout>
      </motion.div>
    )
  }

  console.log('details', details)
  console.log('zip', zip)

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Banner
        anime={details}
        zip={zip as AniZip}
      />
      <Layout>
        <CardGallery list={zip as AniZip} />
      </Layout>
    </motion.div>
  )
}
