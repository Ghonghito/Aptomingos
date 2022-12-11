export const shortAddress = (address, length) => {
  try {
    return `${address.substring(0, length)}...${address.substring(address.length - length)}`;
  } catch (error) {
    console.log(error)
  }
}