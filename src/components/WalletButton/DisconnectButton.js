import React from 'react'

const ConnectButton = ({ address, ...rest }) => {
  return (
    <div>
      <button {...rest} className='bg-black px-5 py-2 rounded-md duration-300 hover:bg-white hover:text-black'>
        {address}
      </button>
    </div>
  )
}

export default ConnectButton