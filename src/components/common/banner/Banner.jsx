import React from 'react'
import SlideSectionBox from './SlideSectionBox'
import BannerNottomSection from './BannerNottomSection'

const Banner = () => {
  return (
    <div className='w-full min-h-screen py-10 bg-gradient-to-br from-cyan-950 to-sky-950'>
       <SlideSectionBox/>
       <BannerNottomSection/>
    </div>
  )
}

export default Banner