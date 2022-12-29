import { useWallet } from "@aptos-labs/wallet-adapter-react"
import { AptosClient } from 'aptos'
import APTLogo from 'assets/images/aptlogo.svg'
import Layout from 'components/Layout'
import LoadingAnimation from 'components/LoadingAnimation'
import { useToast } from 'hooks/useToast'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getAPTPrice } from 'utils/API/CoinGeckoAPI'
import { getMingoDetail, getMingoFloor, getMingoMarketEvent, getMoreMingos } from 'utils/API/topaz'
import { shortAddress } from 'utils/Helpers'

const Index = () => {
  const { connected, signAndSubmitTransaction } = useWallet()
  const [mingoData, setMingoData] = useState([])
  const [mingoFloor, setMingoFloor] = useState(0)
  const [mingoEvents, setMingoEvents] = useState([])
  const [moreMingos, setMoreMingos] = useState([])
  const [aptPrice, setAptPrice] = useState(0)
  const [isLoading, setIsLoading] = useState(Boolean)
  const location = useLocation()
  const { pathname, hash } = location
  const mingo = pathname.split('/').slice(2)[0];
  var mingoname = ''

  const aptosClient = new AptosClient('https://fullnode.mainnet.aptoslabs.com/v1', { WITH_CREDENTIALS: false, })

  const toast = useToast()

  const getDetails = async () => {
    if (hash !== '') {
      mingoname = `${String(mingo).replace('%20', ' ')}${hash}`
      console.log(mingoname)
    } else {
      mingoname = `${String(mingo).replace('%20', ' ')}`
      console.log(mingoname)
    }
    setIsLoading(true)
    setMingoFloor(0)
    setMingoData([])
    setMingoEvents([])
    setMoreMingos([])
    const aptosPrice = await getAPTPrice()
    setAptPrice(aptosPrice.data.aptos.usd)
    const getFloor = await getMingoFloor()
    const data = await getMingoDetail(mingoname)
    console.log(data)
    const getMingoEvents = await getMingoMarketEvent(mingoname)
    const getMingosMore = await getMoreMingos()
    setMingoFloor(getFloor.data.data.floor / 10 ** 8)
    setMingoData(data.data.data)
    setMingoEvents(getMingoEvents.data.data)
    setMoreMingos(getMingosMore.data.data)
    setIsLoading(false)
  }

  const buyMingo = async (seller, price) => {
    const payload = {
      function: "0x2c7bccf7b31baf770fdbcc768d9e9cb3d87805e255355df5db32ac9a669010a2::marketplace_v2::buy",
      type_arguments: [
        "0x1::aptos_coin::AptosCoin"
      ],
      arguments: [
        seller,
        price,
        "1",
        "0xc0e3fbf8ae61056d66ce624d71ccf1888f879355cc4e364ef117249b5e3160a8",
        "Aptomingos",
        `Aptomingo ${hash}`,
        "0"
      ],
      "type": "entry_function_payload"
    }
    try {
      const response = await signAndSubmitTransaction(payload);
      const txResult = await aptosClient.waitForTransactionWithResult(response.hash);
      if (txResult.success === true) {
        toast('success', 'Transaction Confirmd', '', response.hash)
      } else {
        toast('error', 'oh no', txResult.success, response.hash)
      }
    } catch (error) {
      if (error === 'The user rejected the request') {
        toast('error', 'oh no', 'The user rejected the request')
      } else {
        toast('error', 'oh no', error)
      }
    }
  }

  useEffect(() => {
    getDetails()
    // eslint-disable-next-line
  }, [hash])


  return (
    <div>
      <Layout>
        {!isLoading ? (
          <div>
            {Object.keys(mingoData).length > 0 && (
              <div>
                <div className='flex flex-col-reverse md:flex-row gap-2'>
                  <div className='flex'>
                    <div className='bg-zinc-900 p-3 rounded-lg flex flex-col'>
                      <img src={String(mingoData.preview_uri).replace('ipfs://', 'https://ipfs.io/ipfs/')} alt='mingo' className='rounded-lg w-full md:w-[850px]' />
                      <div className='mt-3 border-[1px] border-zinc-600 p-3 rounded-lg'>
                        <p className='text-white'>Item Properties</p>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3'>
                          {mingoData.metadata.attributes.map((x, index) => (
                            <div key={index} className='border-[1px] border-zinc-600 p-3 rounded-lg text-center'>
                              <p className='text-zinc-500'>{x.trait_type}</p>
                              <p className='text-white'>{x.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full'>
                    <div className='bg-zinc-900 p-3 rounded-lg flex flex-col'>
                      <div className='flex items-center gap-2'>
                        <p className='text-zinc-500 text-sm font-bold'>Floor Price</p>
                        <div className='flex items-center gap-1'>
                          <img src={APTLogo} alt='APTLOGO' className='w-4' />
                          <p className='text-white text-sm font-bold'>{mingoFloor} (${Number(Number(mingoFloor) * Number(aptPrice)).toLocaleString('en-US')})</p>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <p className='text-white text-xl md:text-4xl font-bold'>{mingoData.token_name}</p>
                        <p className='text-zinc-500 text-sm font-bold mt-3'>Owned by {shortAddress(mingoData.seller, 6)}</p>
                      </div>
                      <div className='border-[1px] border-zinc-600 p-3 rounded-lg mt-3'>
                        <p className='text-zinc-300 text-lg font-bold'>Current Price</p>
                        {mingoData.is_listed ? (
                          <div>
                            <div className='flex items-center gap-2 mt-3'>
                              <img src={APTLogo} alt='APTLOGO' className='w-8' />
                              <p className='text-white text-2xl font-bold'>{mingoData.price / 10 ** 8} (${Number((Number(mingoData.price) / 10 ** 8) * Number(aptPrice)).toLocaleString('en-US')})</p>
                            </div>
                            {connected ? (
                              <button onClick={() => buyMingo(mingoData.seller, mingoData.price)} className='bg-green-500 px-5 py-2 rounded-lg duration-300 hover:bg-green-700 mt-3 text-white w-full md:w-[150px]'>Buy Now</button>
                            ) : null}
                          </div>
                        ) : (
                          <p className='text-2xl text-zinc-500 font-semibold'>Unlisted</p>
                        )}
                        <div className='mt-3'>
                          <p className='text-zinc-500 text-sm font-bold'>8% Creator Royalty</p>
                          <p className='text-zinc-500 text-sm font-bold'>2.5% Marketplace Fee</p>
                        </div>
                      </div>
                      <div className='border-[1px] border-zinc-600 p-3 rounded-lg mt-3 max-h-[250px] overflow-y-auto'>
                        <p className='text-white'>Latest Activity</p>
                        {Object.keys(mingoEvents).length > 0 ? (
                          <div>
                            {mingoEvents.map((x, index) => (
                              <div key={index}>
                                {x.type === 'ListEvent' && (
                                  <div className='py-1'>
                                    <div className='border-[1px] border-zinc-800 p-2 rounded-lg flex items-center gap-2'>
                                      <p className='text-zinc-400'>{shortAddress(x.data.seller, 5)} Listed for</p>
                                      <div className='flex items-center gap-1'>
                                        <img src={APTLogo} alt='APTLOGO' className='w-5' />
                                        <p className='text-zinc-400'>{Number(x.data.price) / 10 ** 8} APT</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {x.type === 'DelistEvent' && (
                                  <div className='py-1'>
                                    <div className='border-[1px] border-zinc-800 p-2 rounded-lg'>
                                      <p className='text-zinc-400'>{shortAddress(x.data.seller, 5)} Delisted 💎🦩</p>
                                    </div>
                                  </div>
                                )}
                                {x.type === 'BuyEvent' && (
                                  <div className='py-1'>
                                    <div className='border-[1px] border-zinc-800 p-2 rounded-lg flex items-center gap-2'>
                                      <p className='text-zinc-400'>{shortAddress(x.data.buyer, 5)} Bought for</p>
                                      <div className='flex items-center gap-1'>
                                        <img src={APTLogo} alt='APTLOGO' className='w-5' />
                                        <p className='text-zinc-400'>{Number(x.data.price) / 10 ** 8} APT</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className='text-2xl text-zinc-500 font-semibold'>No activity yet</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {Object.keys(moreMingos).length > 0 && (
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg lg:grid-cols-5 gap-3 mt-5'>
                      {moreMingos.map((x, index) => (
                        <div key={index} className='bg-zinc-900 p-2 rounded-lg duration-300 hover:scale-105'>
                          <div>
                            <a href={`/marketplace/${x.token_name}`}>
                              <img src={String(x.preview_uri).replace('ipfs://', 'https://ipfs.io/ipfs/')} alt={x.token_name} className='rounded-lg' />
                            </a>
                            <p className='text-white text-lg mt-3'>{x.token_name}</p>
                            <div className='flex items-center gap-1 py-3'>
                              <img src={APTLogo} alt='APTLOGO' className='w-5' />
                              <p className='text-white'>{Number(x.price) / 10 ** 8} APT (${Number((Number(x.price) / 10 ** 8) * Number(aptPrice)).toLocaleString('en-US')})</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <LoadingAnimation />
        )}
      </Layout>
    </div>
  )
}

export default Index