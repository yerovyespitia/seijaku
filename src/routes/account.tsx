import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
export const Route = createFileRoute('/account')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div>Hello "/account"!</div>
}
