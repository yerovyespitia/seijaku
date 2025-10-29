import { useState } from 'react'

import { createFileRoute } from '@tanstack/react-router'

import { PlayerSettings } from '@/components/player-settings'
import { Sidebar } from '@/components/slidebar'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedItem, setSelectedItem] = useState('General')

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
