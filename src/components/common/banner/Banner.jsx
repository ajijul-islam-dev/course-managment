import React from 'react'
import SlideSectionBox from './SlideSectionBox'
import BannerNottomSection from './BannerNottomSection'

const Banner = () => {
  return (
    <div className='w-full py-10 min-h-screen bg-gradient-to-br from-cyan-950 to-sky-950'>
       <SlideSectionBox/>
       <BannerNottomSection/>
    </div>
  )
}

export default Banner