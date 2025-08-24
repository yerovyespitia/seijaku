import { CardSettings } from '@/components/cards/card-settings'
import { Layout } from '@/components/layouts/main'

export const PlayerSettings = () => {
  return (
    <Layout>
      <CardSettings title='Subtitles' />
      <CardSettings title='Language' />
    </Layout>
  )
}
