const Amadeus = require('amadeus');

// Set up amadeus variable for API calls with API key and secret
export const amadeus = new Amadeus({
  clientId: `${process.env.REACT_APP_AMADEUS_CLIENT_ID}`,
  clientSecret: `${process.env.REACT_APP_AMADEUS_CLIENT_SECRET}`,
  // Alter hostname to 'production' to enter into pay as you go environment
  hostname: 'test'
});

