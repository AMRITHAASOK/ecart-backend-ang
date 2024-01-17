const express = require('express');
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const wishlistController = require('../Controllers/wishlistController');
const jwtMiddleware = require('../Middlewares/jwtMiddleware');
const router = new express.Router();

//get all products
router.get('/products/all-product',productController.getAllProducts)

//register 
router.post('/user/register',userController.register)

//login
router.post('/user/login',userController.login)

//view prodct
router.get('/products/view/:id',productController.viewProduct)

//add to wishlist 
router.get('/products/add/:id',jwtMiddleware,wishlistController.addToWishlist)


module.exports = router
