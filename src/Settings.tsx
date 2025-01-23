import { useState } from 'react'
import { PlayerSettings } from './components/PlayerSettings'
import { Sidebar } from './components/Sidebar'

export default function Settings() {
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
    <section className='w-full'>
      <Sidebar
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className='pl-52'>{renderSettings()}</div>
    </section>
  )
}
