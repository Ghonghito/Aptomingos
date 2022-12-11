import React, { useState } from 'react'
import Logo from 'assets/images/aptomingoslogo.png'
import Layout from 'components/Layout'
import AptomingosLogo from 'assets/images/aptomingoslogo.png'
import ConnectButton from 'components/WalletButton'
import { useLocation } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import { Link } from 'react-scroll'
import { Transition } from '@headlessui/react'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { pathname } = location
  const name = pathname.split('/').slice(1)[0];

  return (
    <div>
      <Transition show={isOpen}
        className='fixed h-screen flex md:hidden mt-7 z-50'
        enter='transition ease-in-out duration-200 transform'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='transition ease-in-out duration-200 transform'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'>
        <div className='inset-0 w-screen h-screen overflow-y-auto p-3 mt-[-50px] duration-200 bg-[#1d525c]'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <a href={`/`} className='flex items-center gap-2'>
                <img src={Logo} alt='logo' className='w-64' />
              </a>
            </div>
            <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
              <MdOutlineClose className='text-white text-2xl' />
            </div>
          </div>
          <div className='border-[1px] w-full mt-3 border-zinc-200'></div>
          <div className='mt-3'>
            <ul className='flex flex-col gap-3 text-white font-semibold'>
              <a href='/' className='duration-300 hover:bg-[#16373d] py-2 rounded-md px-2'>
                <li className='cursor-pointer'>
                  Home
                </li>
              </a>
              <a href='/marketplace' className='duration-300 hover:bg-[#16373d] py-2 rounded-md px-2'>
                <li className='cursor-pointer'>
                  Marketplace
                </li>
              </a>
              <a href='/code' className='duration-300 hover:bg-[#16373d] py-2 rounded-md px-2'>
                <li className='cursor-pointer'>
                  The Code
                </li>
              </a>
              <a href='https://fischermingo.gitbook.io/aptomingos-whitepaper/' target='_blank' rel="noreferrer" className='duration-300 hover:bg-[#16373d] py-2 rounded-md px-2'>
                <li className='cursor-pointer'>
                  Whitepaper
                </li>
              </a>
              <Link className='duration-300 hover:bg-[#16373d] py-2 rounded-md px-2' to="roadmapComponent" spy={true} smooth={true} offset={50} duration={500} >
                <li className='cursor-pointer'>
                  Roadmap
                </li>
              </Link>
              <Link className='duration-300 hover:bg-[#16373d] py-2 rounded-md px-2' to="financialComponent" spy={true} smooth={true} offset={50} duration={500} >
                <li className='cursor-pointer'>
                  Financials
                </li>
              </Link>
              <Link className='duration-300 hover:bg-[#16373d] py-2 rounded-md px-2' to="teamComponent" spy={true} smooth={true} offset={50} duration={500} >
                <li className='cursor-pointer'>
                  Team
                </li>
              </Link>
            </ul>
          </div>
          <div className='border-[1px] w-full mt-3 border-zinc-200'></div>
        </div>
      </Transition>
      <Layout>
        <div className='flex items-center justify-between'>
          <a href='/' >
            <img src={AptomingosLogo} alt='AptomingosLogo' className='w-48 md:w-64 duration-200 hover:scale-95' />
          </a>
          <div className='hidden lg:flex'>
            <ul className='flex gap-8 text-white font-semibold items-center'>
              <a href='/'>
                <li className='cursor-pointer'>
                  Home
                </li>
              </a>
              <a href='/marketplace'>
                <li className='cursor-pointer'>
                  Marketplace
                </li>
              </a>
              {name !== 'marketplace' ? (
                <div className='flex gap-8 items-center'>
                  <a href='/code'>
                    <li className='cursor-pointer'>
                      The Code
                    </li>
                  </a>
                  <a href='https://fischermingo.gitbook.io/aptomingos-whitepaper/' target='_blank' rel="noreferrer">
                    <li className='cursor-pointer'>
                      Whitepaper
                    </li>
                  </a>
                  <Link to="roadmapComponent" spy={true} smooth={true} offset={50} duration={500} >
                    <li className='cursor-pointer'>
                      Roadmap
                    </li>
                  </Link>
                  <Link to="financialComponent" spy={true} smooth={true} offset={50} duration={500} >
                    <li className='cursor-pointer'>
                      Financials
                    </li>
                  </Link>
                  <Link to="teamComponent" spy={true} smooth={true} offset={50} duration={500} >
                    <li className='cursor-pointer'>
                      Team
                    </li>
                  </Link>
                </div>
              ) : (
                <div className='flex gap-8 items-center'>
                  <a href='/marketplace/wallet'>
                    <li className='cursor-pointer'>
                      Wallet
                    </li>
                  </a>
                  <div>
                    <ConnectButton />
                  </div>
                </div>
              )}
            </ul>
          </div>
          <div className='flex md:hidden' onClick={() => setIsOpen(!isOpen)}>
            <BiMenuAltRight className='text-white text-3xl cursor-pointer' />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Index