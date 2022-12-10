import React from 'react'

const TeamCard = ({ image, name, origin, description }) => {
  return (
    <div>
      <div className=''>
        <div className='flex'>
          <img src={image} alt='team' className=' w-full md:w-[330px]' />
        </div>
        <div>
          <p className='text-black font-bold text-xl mt-3'>{name}</p>
          <p className='text-black text-sm md:text-base font-light mt-1'>{origin}</p>
          <p className='text-black text-sm md:text-base mt-2 whitespace-normal'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard