import React, { useState, useEffect, useRef } from 'react'
import ConnectButton from './ConnectButton';
import DisconnectButton from './DisconnectButton';
import { shortAddress } from 'utils/Helpers';

const Index = () => {
  const mountedRef = useRef(true);
  const [isMartianConnected, setIsMartianConnected] = useState()
  const [connectedAptosWallet, setConnectedAptosWallet] = useState()

  const connectAptos = async () => {
    const connect = await window.martian.connect();
    console.log(connect)
    setConnectedAptosWallet(connect.address)
    const connected = await window.martian.isConnected()
    setIsMartianConnected(connected)
  }

  const disconnectAptos = async () => {
    await window.martian.disconnect();
    setIsMartianConnected(false)
  }

  useEffect(() => {
    const checkMartian = async () => {
      const connect = await window.martian.connect();
      setConnectedAptosWallet(connect.address)
      const connected = await window.martian.isConnected()
      setIsMartianConnected(connected)
    }
    checkMartian()

    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className='mr-2'>
        {isMartianConnected ? (
          <DisconnectButton onClick={() => disconnectAptos()} address={shortAddress(connectedAptosWallet, 4)} />
        ) : (
          <ConnectButton onClick={() => connectAptos()} />
        )}
      </div>
    </div>
  )
}

export default Index