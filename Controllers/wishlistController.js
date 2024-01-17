const wishlists = require('../Models/wishlistSchema')

//Add t0 wishlist 

exports.addToWishlist=async(req,res)=>{
    //get an id
    const {id}=req.params
    //userid 
    const userId = req.payload
    //get the details of particlar id

    try{
        const existingProduct = await wishlists.findOne({productId:id, userId})
        if(existingProduct){
            res.status(406).json("Product already exists in your wishlist")
        }
        else{
            const newProdct = new wishlists({
                productId:id,
                userId
            })
            await newProdct.save()
            res.status(200).json(newProdct)

        }
    }
    catch(err){
        res.status(401).json("Error"+err)
    }

}
