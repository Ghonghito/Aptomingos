import React, { useState, useEffect } from 'react'
import Layout from 'components/Layout'
import LoadingAnimation from 'components/LoadingAnimation'
import APTLogo from 'assets/images/aptlogo.svg'
import { getAddressNFTs } from 'utils/API/topaz'


const Index = () => {
  const [isLoading, setIsLoading] = useState(Boolean)
  const [isConnected, setIsConnected] = useState(Boolean)
  const [userMingos, setUserMingos] = useState([])

  const getUserNFTs = async () => {
    setIsLoading(true)
    setUserMingos([])
    await window.martian.connect();
    const connected = await window.martian.isConnected()
    if (connected) {
      setIsConnected(true)
      const getAcc = await window.martian.account()
      const data = await getAddressNFTs(getAcc.address)
      data.data.data.forEach((x) => {
        if (x.collection_id === '0xc0e3fbf8ae61056d66ce624d71ccf1888f879355cc4e364ef117249b5e3160a8::Aptomingos') {
          setUserMingos(oldArray => [...oldArray, x]);
        }
      })
    }

    console.log(userMingos)
    setIsLoading(false)
  }

  useEffect(() => {
    getUserNFTs()
    // eslint-disable-next-line
  }, [])


  return (
    <div>
      <Layout>
        {isConnected ? (
          <div>
            {!isLoading ? (
              <div>
                {Object.keys(userMingos).length > 0 ? (
                  <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg lg:grid-cols-5 gap-3 mt-5'>
                    {userMingos.map((x, index) => (
                      <div key={index} className='bg-zinc-900 p-2 rounded-lg duration-300 hover:scale-105'>
                        <div>
                          <a href={`/marketplace/${x.token_name}`}>
                            <img src={String(x.preview_uri).replace('ipfs://', 'https://ipfs.io/ipfs/')} alt={x.token_name} className='rounded-lg' />
                          </a>
                          <p className='text-white text-lg mt-3'>{x.token_name}</p>
                        </div>
                        {!x.is_listed ? (
                          <div>
                            <button className='w-full bg-[#347A86] text-white px-5 py-2 rounded-lg mt-2 duration-300 hover:bg-white hover:text-black'>List Now</button>
                          </div>
                        ) : (
                          <div className='flex items-center gap-2 mt-3'>
                            <img src={APTLogo} alt='APT' className='w-5' />
                            <p className='text-white text-sm'>{Number(x.price) / 10 ** 8}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className='text-white font-bold text-center mt-5 text-2xl md:text-4xl'>You don't have mingos... NO MINGO NO MONEY</p>
                )}
              </div>
            ) : (
              <LoadingAnimation />
            )}
          </div>
        ) : (
          <div>
            <p className='text-white font-bold text-center mt-5 text-2xl md:text-4xl'>Connect Wallet</p>
          </div>
        )}
      </Layout>
    </div>
  )
}

export default Index