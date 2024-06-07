// const logger = require('../middlewares/logger');
const dotenv = require('dotenv').config();
const updateEnvFile = require('../helpers/env-updater');
const bigCommerce = require('../helpers/bigcommerce');

class authController {
    // GET /auth
    async auth(req, res) {
        try {
            console.log(bigCommerce);
            // logger.info(bigCommerce);
            const data = await bigCommerce.authorize(req.query);
            // logger.info(data);
            console.log(data);
            let token = data.access_token;
            let storeHash = data.context.split('/')[1];
            console.log(token)
            console.log(storeHash)
            updateEnvFile('ACCESS_TOKEN', token);
            updateEnvFile('STORE_HASH', storeHash);
            res.redirect('/load');
        } catch (err) {
            console.log(err)
            // logger.error(err);
        }
    }
}

module.exports = new authController;
