import React, { useState, useEffect } from 'react'
import { getListings, getMingosOverview, getListedMingosCount } from 'utils/API/topaz'
import Layout from 'components/Layout'
import Card from 'components/Marketplace/Card'
import { getAPTPrice } from 'utils/API/CoinGeckoAPI'
import { shortAddress } from 'utils/Helpers'

const Index = () => {
  const [isLoading, setIsLoading] = useState([])
  const [listingData, setListingData] = useState([])
  const [aptPrice, setAptPrice] = useState(0)
  const [overview, setOverview] = useState([])
  const [listedMingos, setLisedMingos] = useState(0)

  const data = async () => {
    setIsLoading(true)
    const aptosPrice = await getAPTPrice()
    setAptPrice(aptosPrice.data.aptos.usd)
    const listings = await getListings()
    setListingData(listings.data.data)
    const data = await getMingosOverview()
    setOverview(data.data.data)
    const listed = await getListedMingosCount()
    setLisedMingos(listed.data.count)
    setIsLoading(false)
  }

  useEffect(() => {
    data()
  }, [])

  return (
    <div>
      <Layout>
        {!isLoading ? (
          <div>
            {Object.keys(overview).length > 0 && (
              <div className='bg-zinc-900 rounded-lg p-3'>
                <div className='flex flex-col md:flex-row gap-3'>
                  <img src={overview.logo_uri} alt='Aptomingos' className='rounded-lg w-full sm:w-[180px]' />
                  <div>
                    <div>
                      <p className='text-white text-2xl font-bold'>{overview.name}</p>
                      <a href={`https://explorer.aptoslabs.com/account/${overview.creator}`} target='_blank' rel='noreferrer' className='hover:underline'>
                        <p className='text-zinc-400 text-sm mt-1'>Created By {shortAddress(overview.creator, 6)}</p>
                      </a>
                      <p className='text-zinc-400 text-base mt-1'>{overview.description}</p>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2 mt-3'>
                      <div className='border-[1px] border-zinc-700 p-3 rounded-lg'>
                        <p className='text-zinc-500 text-sm'>Floor Price</p>
                        <p className='text-white text-md'>{Number(overview.floor) / 10 ** 8} APT</p>
                      </div>
                      <div className='border-[1px] border-zinc-700 p-3 rounded-lg'>
                        <p className='text-zinc-500 text-sm'>Volume (24h)</p>
                        <p className='text-white text-md'>{Number(Number(overview.volume_24) / 10 ** 8).toLocaleString('en-US')} APT</p>
                      </div>
                      <div className='border-[1px] border-zinc-700 p-3 rounded-lg'>
                        <p className='text-zinc-500 text-sm'>Total Volume</p>
                        <p className='text-white text-md'>{Number(Number(overview.total_volume) / 10 ** 8).toLocaleString('en-US')} APT</p>
                      </div>
                      <div className='border-[1px] border-zinc-700 p-3 rounded-lg'>
                        <p className='text-zinc-500 text-sm'>Items</p>
                        <p className='text-white text-md'>{Number(overview.max_amount).toLocaleString('en-US')}</p>
                      </div>
                      {listedMingos > 0 && (
                        <div className='border-[1px] border-zinc-700 p-3 rounded-lg'>
                          <p className='text-zinc-500 text-sm'>Listed</p>
                          <p className='text-white text-md'>{Number(listedMingos).toLocaleString('en-US')}</p>
                        </div>
                      )}
                      <div className='border-[1px] border-zinc-700 p-3 rounded-lg'>
                        <p className='text-zinc-500 text-sm'>Owners</p>
                        <p className='text-white text-md'>{Number(overview.num_unique_owners).toLocaleString('en-US')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {listingData.length > 0 ? (
              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-3'>
                {listingData.map((x) => (
                  <Card key={x.token_name} data={x} aptosPrice={aptPrice} />
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <p>დაელოდე</p>
        )}
      </Layout>
    </div>
  )
}

export default Index