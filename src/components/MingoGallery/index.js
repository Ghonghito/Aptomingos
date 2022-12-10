import React from 'react'
import Layout from 'components/Layout'
import glitch from 'assets/images/glitch1.png'
import golden from 'assets/images/golden11.png'
import rainbow from 'assets/images/rainbow29.png'
import Aptomingo from 'assets/images/Aptomingo3.png'

const index = () => {
  return (
    <div className='mt-10 md:mt-20'>
      <Layout>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
          <img src={glitch} alt='mingo' className='rounded-lg duration-200 hover:scale-105 w-full' />
          <img src={golden} alt='mingo' className='rounded-lg duration-200 hover:scale-105 w-full' />
          <img src={rainbow} alt='mingo' className='rounded-lg duration-200 hover:scale-105 w-full' />
          <img src={Aptomingo} alt='mingo' className='rounded-lg duration-200 hover:scale-105 w-full' />
        </div>
      </Layout>
    </div>
  )
}

export default index