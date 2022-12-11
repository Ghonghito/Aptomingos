import axios from "axios";

export const getAptomingos = async () => {
  const json = await axios(`https://api-v1.topaz.so/api/collection?slug=Aptomingos-c0e3fbf8ae`)
    .then((response) => response)
    .catch(() => 'error');
  return json
}

export const getMingosMetadata = async () => {
  const json = await axios(`https://api-v1.topaz.so/api/collection-metadata?collection_id=0xc0e3fbf8ae61056d66ce624d71ccf1888f879355cc4e364ef117249b5e3160a8::Aptomingos`)
    .then((response) => response)
    .catch(() => 'error');
  return json
}

export const getListedMingosCount = async () => {
  const json = await axios(`https://api-v1.topaz.so/api/listed-count?collection_id=0xc0e3fbf8ae61056d66ce624d71ccf1888f879355cc4e364ef117249b5e3160a8::Aptomingos`)
    .then((response) => response)
    .catch(() => 'error');
  return json
}

export const getMingosOverview = async () => {
  const json = await axios(`https://api-v1.topaz.so/api/explore-collections?collection_id=0xc0e3fbf8ae61056d66ce624d71ccf1888f879355cc4e364ef117249b5e3160a8::Aptomingos`)
    .then((response) => response)
    .catch(() => 'error');
  return json
}

export const getListings = async () => {
  const json = await axios(`https://api-v1.topaz.so/api/listing-view?collection_id=0xc0e3fbf8ae61056d66ce624d71ccf1888f879355cc4e364ef117249b5e3160a8::Aptomingos&from=0&to=100&sort_mode=PRICE_LOW_TO_HIGH&buy_now=true&page=0&filters={}`)
    .then((response) => response)
    .catch(() => 'error');
  return json
}

export const getListedCount = async () => {
  const json = await axios(`https://api-v1.topaz.so/api/listed-count?collection_id=0xc0e3fbf8ae61056d66ce624d71ccf1888f879355cc4e364ef117249b5e3160a8::Aptomingos`)
    .then((response) => response)
    .catch(() => 'error');
  return json
}

export const getMingoDetail = async (id) => {
  const data = {
    property_version: 0,
    collection_slug: "Aptomingos-c0e3fbf8ae",
    token_name: `${id}`
  }
  const json = await axios.post('https://api-v1.topaz.so/api/asset-view-p', data)
    .then(response => response)
    .catch(() => 'error')
  return json
}

export const getMingoFloor = async () => {
  const data = {
    collection_id: "0xc0e3fbf8ae61056d66ce624d71ccf1888f879355cc4e364ef117249b5e3160a8::Aptomingos"
  }
  const json = await axios.post('https://api-v1.topaz.so/api/floor', data)
    .then(response => response)
    .catch(() => 'error')
  return json
}

export const getMoreMingos = async () => {
  const data = {
    collection_id: "0xc0e3fbf8ae61056d66ce624d71ccf1888f879355cc4e364ef117249b5e3160a8::Aptomingos"
  }
  const json = await axios.post('https://api-v1.topaz.so/api/collection-more', data)
    .then(response => response)
    .catch(() => 'error')
  return json
}

export const getMingoMarketEvent = async (id) => {
  const data = {
    token_id: `0xc0e3fbf8ae61056d66ce624d71ccf1888f879355cc4e364ef117249b5e3160a8::Aptomingos::${id}::0`
  }
  const json = await axios.post('https://api-v1.topaz.so/api/market-events', data)
    .then(response => response)
    .catch(() => 'error')
  return json
}