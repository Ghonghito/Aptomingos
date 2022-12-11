import React from 'react'
import APTLogo from 'assets/images/aptlogo.svg'

const Card = ({ data, aptosPrice }) => {
  return (
    <div className='duration-300 hover:scale-105'>
      <div className='bg-zinc-900 rounded-lg p-3'>
        <a href={`/marketplace/${data.token_name}`}>
          <img src={String(data.preview_uri).replace('ipfs://', 'https://ipfs.io/ipfs/')} alt={data.token_name} className='rounded-lg' />
        </a>
        <div className='mt-3'>
          <p className='text-white'>{data.token_name}</p>
          <div className='flex items-center justify-between mt-3'>
            <div className='flex items-center gap-1'>
              <img src={APTLogo} alt='APT' className='w-5' />
              <p className='text-white text-sm md:text-base'>{data.price / 10 ** 8}</p>
              <p className='text-white text-sm md:text-base'>(${Number((Number(data.price) / 10 ** 8) * aptosPrice).toLocaleString('en-US')})</p>
            </div>
          </div>
          <p className='text-white text-sm md:text-base mt-3'>🏆{data.rank}</p>
        </div>
      </div>
    </div>
  )
}

export default Card