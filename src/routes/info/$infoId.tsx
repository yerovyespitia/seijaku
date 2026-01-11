import { useAnimeZip, useDetails } from '@/queries/useQuery'
import { AniZip } from '@/types/zip'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

import { CardGallery } from '@/components/cards/card-gallery'
import { Loading as LoadingCards } from '@/components/cards/card-slider/loading-cards'
import { NotFound } from '@/components/errors/not-found'
import { Banner } from '@/components/hero/banner'
import { Loading as HLoading } from '@/components/hero/Loading'
import { Layout } from '@/components/layouts/main'

export const Route = createFileRoute('/info/$infoId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      infoId: params.infoId,
    }
  },
  pendingComponent: () => <HLoading />,
  errorComponent: () => (
    <div className='px-6'>
      <NotFound />
    </div>
  ),
})

function RouteComponent() {
  const { infoId } = Route.useLoaderData()

  let numId = Number(infoId)
  const { data: zip, isLoading: loadingZip } = useAnimeZip(numId)
  const { data: jikan, isLoading: loadingJikan } = useDetails(numId)

  if (loadingJikan || !jikan || loadingZip) {
    return (
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <HLoading />
        <Layout>
          <LoadingCards />
        </Layout>
      </motion.div>
    )
  }

  console.log('jikan', jikan)
  console.log('zip', zip)

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Banner jikan={jikan} zip={zip as AniZip} />
      <Layout>
        <CardGallery list={zip as AniZip} jikan={jikan} />
      </Layout>
    </motion.div>
  )
}
