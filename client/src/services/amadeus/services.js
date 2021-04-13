// Import amadeus variable from the amadeusConfig file
import { amadeus } from "./amadeusConfig";
const Amadeus = require('amadeus');

// Get request for finding city code
export const getCity = async (cityName) => {
  const cityCode = await amadeus.referenceData.locations.get({
    keyword: `${cityName}`,
    subType: Amadeus.location.any
  })
  return cityCode.data;
};

