import React from 'react'
import Layout from 'components/Layout'
import TheCode from 'assets/images/thecode.png'

const index = () => {
  return (
    <div>
      <Layout>
        <div className='flex justify-center'>
          <img src={TheCode} alt='code' />
        </div>
      </Layout>
    </div>
  )
}

export default index