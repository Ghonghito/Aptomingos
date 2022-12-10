import React from 'react'
import Roadmap from 'assets/images/roadmap.png'
import Layout from 'components/Layout'

const index = () => {
  return (
    <div id='roadmapComponent' className='mt-10 md:mt-20'>
      <Layout>
        <div className='flex justify-center'>
          <img src={Roadmap} alt='roadmap' className='w-full md:w-[750px]' />
        </div>
      </Layout>
    </div>
  )
}

export default index