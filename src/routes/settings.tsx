import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { PlayerSettings } from '@/components/player-settings'
import { Sidebar } from '@/components/slidebar'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedItem, setSelectedItem] = useState('General')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const renderSettings = () => {
    switch (selectedItem) {
      case 'Video player':
        return <div>Video player</div>
      case 'Torrents':
        return <div>Torrents</div>
      case 'Interface':
        return <div>Interface</div>
      default:
        return <PlayerSettings />
    }
  }

  return (
    <>
      <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <div className='pl-60'>{renderSettings()}</div>
    </>
  )
}
