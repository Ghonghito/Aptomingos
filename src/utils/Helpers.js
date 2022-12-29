export const shortAddress = (address, length) => {
  try {
    return `${address.substring(0, length)}...${address.substring(address.length - length)}`;
  } catch (error) {
    console.log(error)
  }
}

export const getExplorerURL = (type, data) => {
  switch (type) {
    case 'account':
      return `https://explorer.aptoslabs.com/account/${data}`
    case 'token':
      return `https://explorer.aptoslabs.com/token/${data}`
    case 'txn':
      return `https://explorer.aptoslabs.com/txn/${data}`
    case 'block':
      return `https://explorer.aptoslabs.com/block/${data}`
    default:
      return `https://explorer.aptoslabs.com/`
  }
}