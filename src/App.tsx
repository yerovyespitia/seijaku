import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'

export default function App() {
  return (
    <main className="flex flex-1 overflow-hidden pt-7">
      <Sidebar />
      <Topbar />
    </main>
  )
}
