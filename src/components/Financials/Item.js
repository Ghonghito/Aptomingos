import React from 'react'

const Item = ({ image, description }) => {
  return (
    <div>
      <div className=''>
        <img src={image} alt='maintain' />
        <p className='mt-5'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Item