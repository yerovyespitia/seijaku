import { createFileRoute } from '@tanstack/react-router'
import App from '@/App'
import { ErrorPage } from '@/Error'

export const Route = createFileRoute('/')({
  component: Index,
  errorComponent: () => (
    <div className='px-6'>
      <ErrorPage />
    </div>
  ),
})

function Index() {
  return <App />
}
