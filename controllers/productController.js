const asyncHandler = require("express-async-handler");
const bigCommerce = require('../helpers/bigcommerce')

exports.product_list = asyncHandler(async (req, res, next) => {
    try {
        bigCommerce.get('/catalog/products')
            .then(data => {
                // console.log(data.data);
                res.render('product/index', {products: data.data});
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

exports.create = asyncHandler(async (req, res, next) => {
    try {
        const body = {
            name: 'Vintage Denim Jacket',
            type: 'physical',
            description: '<p>Add a timeless touch to your wardrobe with this vintage-inspired denim jacket. Crafted from premium cotton, it features a classic trucker silhouette, button-flap chest pockets, and a sleek, indigo wash.</p><p>Whether you pair it with a casual t-shirt or a dressy blouse, this versatile jacket will elevate your look.</p>',
            price: '79.99',
            categories: [18], // Assuming categories 25 and 27 exist in your store
            availability: 'available',
            weight: '1.2'
        }
        bigCommerce.post('/catalog/products', body)
            .then(data => {
                console.log(data.data);
                res.redirect('/products');
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while creating the product.' });
            });
    } catch (error) {
        console.error("An error occurred:: ", error);
        res.render('error', { error: error });
    }
})

exports.delete = asyncHandler(async (req, res, next) => {
    try {
        bigCommerce.delete('/catalog/products/' + req.params.id)
            .then(data => {
                res.redirect('/products');
            })
    } catch (error) {
        console.error("An error occurred:: ", error);
        res.render('error', { error: error });
    }
})

exports.detail = asyncHandler(async (req, res, next) => {
    try {
        bigCommerce.get('/catalog/products/' + req.params.id)
            .then(data => {
                res.render('product/detail', { products: data.data });
            })
    } catch (error) {
        console.error("An error occurred:: ", error);
        res.render('error', { error: error });
    }
})

exports.addCustomField = asyncHandler(async (req, res, next) => {
    const productId = req.body.data.id;
    try {
        let customFieldData = {
            "name": "doctor_code",
            "value": 'khisaf23'
        }
        bigCommerce.post('/catalog/products/' + productId + '/custom-fields', customFieldData)
            .then(data => {
                console.log(data.data);
            })
            .catch(error => {
                console.log(error)
            })
    } catch (error) {
        console.error("An error occurred:: ", error);
    }
})
