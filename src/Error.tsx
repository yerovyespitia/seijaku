import { Link } from '@tanstack/react-router'
import { Home } from 'lucide-react'

export const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-pm text-txtGray'>
      <div className='space-y-9 text-center'>
        <h1 className='text-3xl font-medium mb-2'>Oops!</h1>
        <p className='text-5xl'>{'⎛⎝ ≽  >  ⩊   < ≼ ⎠⎞'}</p>
        <p className='text-xl mb-4'>An unexpected error occurred.</p>
      </div>
      <div className='flex space-x-4 mt-4'>
        <Link
          to='/'
          className='flex items-center px-4 py-2 bg-sd text-zinc-40 rounded-md hover:bg-[#3E4251] transition-colors duration-200'
        >
          <Home className='size-4 mr-2' />
          Go back home
        </Link>
      </div>
    </div>
  )
}
