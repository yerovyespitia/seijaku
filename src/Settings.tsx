import { PlayerSettings } from './components/PlayerSettings'
import { Sidebar } from './components/Sidebar'

export default function Settings() {
  return (
    <section className='w-full'>
      <Sidebar />
      <div className='pl-52'>
        <PlayerSettings />
      </div>
    </section>
  )
}
