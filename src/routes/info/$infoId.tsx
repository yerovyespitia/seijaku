import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '@/components/errors/not-found'
import { Layout } from '@/components/layouts/main'
import { useAnimeZip, useDetails } from '@/queries/useQuery'
import { Loading as HLoading } from '@/components/hero/loading'
import { Banner } from '@/components/hero/banner'
import { Loading as LoadingCards } from '@/components/cards/card-slider/loading-cards'
import { CardGallery } from '@/components/cards/card-gallery'
import { AniZip } from '@/types/zip'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        <CardGallery list={zip as AniZip} anime={jikan} />
      </Layout>
    </motion.div>
  )
}
