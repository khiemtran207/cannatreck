const asyncHandler = require("express-async-handler");
const bigCommerce = require('../helpers/bigcommerce');
const { redirect } = require("express/lib/response");

exports.updateOrder = asyncHandler(async (req, res, next) => {
    console.log(res);
    // const body = {
    //     "customer_id": 1,
    //     "line_items": [
    //         {
    //             "quantity": 2,
    //             "product_id": 81,
    //             "list_price": 5,
    //             "name": "calendar"
    //         }
    //     ],
    //     "channel_id": 1,
    //     "currency": {
    //         "code": "HKD"
    //     },
    //     "locale": "en-US"
    // }
    // try {
    //     bigCommerce.post('/carts', body )
    //         .then(data => {
    //
    //             // let cartId = data.data.id;
    //             // res.redirect('/carts?id=' + cartId);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             res.status(500).json({ error: 'An error occurred while retrieving the product list.' });
    //         });
    // } catch (error) {
    //     console.error("An error occurred:: ", error);
    //     res.render('error', { error: error });
    // }
});