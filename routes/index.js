var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')
const authRouter = require('./authRouter')
const cartController = require('../controllers/cartController')
const productRouter = require('./product')

router.get('/load', function(req, res, next) {
  res.render('index', { title: 'Khiemtv' });
});

router.use('/auth', authRouter)

router.get('/products', productController.product_list);
router.get('/products/create', productController.create);
router.get('/products/delete/:id', productController.delete);
router.get('/products/detail/:id', productController.detail);

router.post('/products/add-custom-field', productController.addCustomField);
router.post('/carts/add-product', cartController.createCart)

router.post('/products/add-variant')


module.exports = router;
