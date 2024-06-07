const asyncHandler = require("express-async-handler");
const bigCommerce = require('../helpers/bigcommerce')

exports.getAnAbandonedCart = asyncHandler(async (req, res, next) => {
    try {
        console.log('dddd')
        bigCommerce.get('/abandoned_carts')
            .then(data => {
                console.log('kkkk')
                console.log(data);
                // res.render('product/index', {products: data.data});
            })
            .catch(error => {
                console.log('dddsss')
                console.error(error);
                res.status(500).json({ error: 'An error occurred while retrieving the product list.' });
            });
    } catch (error) {
        console.error("An error occurred:: ", error);
        res.render('error', { error: error });
    }
});
