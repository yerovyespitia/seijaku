import { createFileRoute } from '@tanstack/react-router'
import Collections from '../Collections'

export const Route = createFileRoute('/collections')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Collections />
}
