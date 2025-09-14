import Banner from '@/components/common/banner/Banner'
import LearningPathSection from '@/components/common/learning-path/LearningPathSection'
import React from 'react'
import StudentsReview from '../components/common/students-review/StudentsReview';

const HomePage = () => {
  return (
    <div className=''>
      <div className=""> 
        <Banner/>
        <LearningPathSection/>
        <StudentsReview />
      </div>
    </div>
  )
}

export default HomePage