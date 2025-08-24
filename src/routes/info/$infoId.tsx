import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '@/errors/not-found'
import { Layout } from '@/components/layouts/main'
import { useAnimeZip, useDetails } from '@/queries/useData'
import { Loading as HLoading } from '@/components/hero/Loading'
import { Banner } from '@/components/hero/banner'
import { Loading as LoadingCards } from '@/components/cards/card-slider/LoadingCards'
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
  const { data: details, isLoading: loadingDetails } = useDetails(numId)

  if (loadingDetails || !details || loadingZip) {
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

  console.log('details', details)
  console.log('zip', zip)

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Banner anime={details} zip={zip as AniZip} />
      <Layout>
        <CardGallery list={zip as AniZip} />
      </Layout>
    </motion.div>
  )
}
