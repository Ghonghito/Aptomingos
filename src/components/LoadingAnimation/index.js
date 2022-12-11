import React from 'react'
import Layout from 'components/Layout'
import MingoHead from 'assets/images/mingoheads.png'

const index = () => {
  return (
    <div>
      <Layout>
        <div className='flex flex-col items-center justify-center mt-3 animate-spin'>
          <img src={MingoHead} alt='mingoHead' className='w-[150px]' />
        </div>
      </Layout>
    </div>
  )
}

export default index