const asyncHandler = require("express-async-handler");
const bigCommerce = require('../helpers/bigcommerce')

exports.getAll = asyncHandler(async (req, res, next) => {
    try {
        bigCommerce.get('/carts/metafields')
            .then(data => {
                console.log(data.data);
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while retrieving the product list.' });
            });
    } catch (error) {
        console.error("An error occurred:: ", error);
        res.render('error', { error: error });
    }
});
