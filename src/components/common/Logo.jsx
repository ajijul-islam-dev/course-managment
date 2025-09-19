import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link className='' href="/">
        <img className='w-32' src="/images/logo.png" alt="Logo" />
    </Link>
  )
}

export default Logo