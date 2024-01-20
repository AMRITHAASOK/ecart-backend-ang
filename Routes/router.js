const express = require('express');
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const wishlistController = require('../Controllers/wishlistController');
const jwtMiddleware = require('../Middlewares/jwtMiddleware');
const router = new express.Router();
const cartController=require('../Controllers/cartController')
//get all products
router.get('/products/all-product',productController.getAllProducts)

//register 
router.post('/user/register',userController.register)

//login
router.post('/user/login',userController.login)

//view prodct
router.get('/products/view/:id',productController.viewProduct)

//add to wishlist 
router.post('/products/wishlist',jwtMiddleware,wishlistController.addToWishlist)

//add to wishlist 
router.get('/products/getwishlist',jwtMiddleware,wishlistController.getWishlist)

//delete from wishlist
router.delete('/products/deletewishlist/:id',jwtMiddleware,wishlistController.deleteWishlist)

//add to cart
router.post('/products/cart',jwtMiddleware,cartController.addCart)

router.get('/products/getcart',jwtMiddleware,cartController.getCart)

router.delete('/products/deletecart/:id',jwtMiddleware,cartController.deleteCart)


router.get('/products/incrementcart/:id',jwtMiddleware,cartController.incrementCart)

module.exports = router
