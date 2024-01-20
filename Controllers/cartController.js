const carts = require('../Models/cartSchema')
const cartController= require('../Models/cartSchema')

//Add to cart

exports.addCart=async(req,res)=>{
    //get product details
    const {id,title,image,price,quantity}=req.body

    try{
        //check if product is already in cart
        const product = await carts.findOne({id})

        if(product){
            //product is already in cart and update the quantity
            product.quantity+=1
            //update the grand total
            product.grandTotal=product.price*product.quantity
            product.save()
            //send response to the client
            res.status(200).json("Item updated successfully")
        }
        else{
            //product is not in cart and will added
            const newProduct = new carts({id,title,image,price,quantity,grandTotal:price})
            await newProduct.save()//product is saved successfully
             //send response to the client
             res.status(200).json("Item added successfully")
        }

    }
    catch(err){
        res.status(404).json(err)
    }
}

exports.getCart=async(req, res) => {
    try{
        const allCartProducts = await carts.find()
        res.status(200).json(allCartProducts)
    }
    catch(err){
        res.status(404).json(err)
    }
}

exports.deleteCart=async(req, res) => {
    //product id
    const {id}=req.params
    try{
        const removedProduct = await carts.deleteOne({id})
        if(removedProduct){
            const allCart = await carts.find()
            res.status(200).json(allCart)//pass remaining product to cart
        }
    }
    catch(err){
        res.status(404).json(err)
    }
}

exports.incrementCart=async(req, res) => {
    //product id
    const {id}=req.params
    try{
        //check if product in cart
        const cartProduct = await carts.findOne({id})
        if(cartProduct){
            //update quantity
            cartProduct.quantity +=1
            //update grand total
            cartProduct.grandTotal =cartProduct.price *cartProduct.quantity
            //save
            await cartProduct.save()
            //get all products after update
            const allCart = await carts.find()
            res.status(200).json(allCart)//pass updated product to cart

        }
        else{
            res.status(404).json("item not found")
        }
    }
    catch(err){
        res.status(404).json(err)
    }
}