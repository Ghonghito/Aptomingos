import React from 'react'
import Logo from 'assets/images/aptomingoslogo.png'
import Layout from 'components/Layout'
import { BsTwitter } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'

const index = () => {
  return (
    <div className='mt-auto'>
      <div className='bg-black py-12 mt-12'>
        <Layout>
          <div className='flex items-center justify-between'>
            <a href='/'>
              <img src={Logo} alt='logo' className='w-[350px]' />
            </a>
            <div className='flex items-center gap-5'>
              <a href='https://twitter.com/Aptomingos' target='_blank' rel="noreferrer">
                <BsTwitter className='text-white text-3xl' />
              </a>
              <a href='https://discord.gg/aptomingos' target='_blank' rel="noreferrer">
                <FaDiscord className='text-white text-3xl' />
              </a>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default index