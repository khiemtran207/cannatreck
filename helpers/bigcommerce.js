const BigCommerce = require('node-bigcommerce');
const dotenv = require('dotenv').config();

const bigCommerce = new BigCommerce({
    clientId: process.env.CLIENT_ID,
    accessToken: process.env.ACCESS_TOKEN,
    secret: process.env.CLIENT_SECRET,
    storeHash: process.env.STORE_HASH,
    responseType: 'json',
    apiVersion: 'v3',
    callback: process.env.CALLBACK_URI
});

module.exports = bigCommerce;