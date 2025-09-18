import React from 'react'
import { Spinner } from '../components/ui/shadcn-io/spinner/index';

const Loading = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center text-4xl text-red-500'>
      <Spinner />
    </div>
  )
}

export default Loading