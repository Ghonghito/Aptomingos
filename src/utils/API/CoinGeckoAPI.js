import axios from "axios";

export const getAPTPrice = async () => {
  const json = await axios(`https://api.coingecko.com/api/v3/simple/price?ids=aptos&vs_currencies=usd`)
    .then((response) => response)
    .catch(() => 'error');
  return json
}
