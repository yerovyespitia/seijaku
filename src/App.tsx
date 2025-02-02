import { Layout } from '@/components/Layout'
import { SkeletonPosterSlider } from './components/SkeletonPosterSlider'
import { SkeletonHero } from './components/SkeletonHero'
import { SkeletonCardSlider } from './components/SkeletonCardSlider'

export default function App() {
  return (
    <>
      <SkeletonHero />
      <Layout>
        <SkeletonCardSlider />
        <SkeletonCardSlider />
        <SkeletonPosterSlider />
        <SkeletonPosterSlider />
        <SkeletonPosterSlider />
      </Layout>
    </>
  )
}
