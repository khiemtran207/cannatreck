const asyncHandler = require("express-async-handler");
const bigCommerce = require('../helpers/bigcommerce');

exports.createCart = asyncHandler(async (req, res, next) => {
    const cartId = req.body.data.id;
    console.log(cartId);
    let cartData = await bigCommerce.get('/carts/' + cartId);
    console.log(cartData);
    let physicalItemsData = cartData.data.line_items.physical_items;
    let deletedLineItem = false;
    // for (const item of physicalItemsData) {
    //     let productId = item.product_id;
    //     let lineItemId = item.id;
    //     let allowedToBuy = await validateProductAddCart(productId);
    //     if (!allowedToBuy) {
    //         deletedLineItem = deleteLineItem(lineItemId, cartId);
    //         break;
    //     }
    // }
    // if (deletedLineItem) {
    //     res.status(200).json({ message: 'Item removed from the cart.' });
    // } else {
    //     res.status(200).json({ message: 'No items were removed from the cart.' });
    // }
});

// const validateProductAddCart = async (productId) => {
//     let allowedToBuy = false;
//     try {
//         const data = await bigCommerce.get('/catalog/products/' + productId + '/custom-fields');
//         data.data.forEach(item => {
//             if (item.name === "doctor_code" && item.value === "khisaf298893") {
//                 allowedToBuy = true;
//             }
//         });
//     } catch (error) {
//         console.error("An error occurred:: ", error);
//     }
//     return allowedToBuy;
// };

// const deleteLineItem = (lineItemId, cartId) => {
//     try {
//         bigCommerce.delete('/carts/' + cartId + '/items/' + lineItemId)
//             .then(data => {
//                 return true;
//             })
//             .catch(error => {
//                 return false;
//             });
//     } catch (error) {
//         console.error("An error occurred:: ", error);
//     }
// }