import React from 'react'
import Layout from 'components/Layout'
import MingoHead from 'assets/images/mingoheads.png'

const index = () => {
  return (
    <div className='mt-10 md:mt-20'>
      <Layout>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div>
            <p className='text-white text-4xl md:text-4xl font-bold w-full md:w-[450px]'>Some flamingos made by a bunch of idiots</p>
            <p className='text-white w-full md:w-[450px] mt-[20px]'>We are a tight-knit group of traders with collective experience spanning over a few years in the NFT/Crypto space.
              We are not developers. We are not digital artists. We are not professional marketers.
            </p>
            <div className='flex flex-col md:flex-row w-full md:items-center gap-3 mt-3'>
              <a href='https://fischermingo.gitbook.io/aptomingos-whitepaper/' target='_blank' rel='noreferrer' className='w-full'>
                <button className='w-full px-5 py-3 bg-white text-red-500 rounded-md font-semibold duration-300 hover:bg-red-500 hover:text-white'>Whitepaper</button>
              </a>
              <a href='https://www.topaz.so/collection/Aptomingos-c0e3fbf8ae' target='_blank' rel='noreferrer' className='w-full'>
                <button className='w-full bg-white text-[#23636F] px-12 py-3 rounded-lg font-bold duration-300 hover:bg-[#298494] hover:text-white'>
                  Buy a mingo
                </button>
              </a>
            </div>
          </div>
          <div className='hidden md:flex flex-col items-center space-y-3'>
            <img src={MingoHead} alt='mingohead' className='w-60' />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default index