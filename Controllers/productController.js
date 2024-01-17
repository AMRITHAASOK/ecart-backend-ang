const products = require('../Models/productSchema')


exports.getAllProducts=async(req,res)=>{
   try{
        const allProducts = await products.find()
        res.status(200).json(allProducts)
   }
   catch(err){
    res.status(401).json(err)
   }
}

exports.viewProduct=async(req,res)=>{
   const {id}= req.params;//id = 2
   try{
        const Product = await products.findOne({id})
        res.status(200).json(Product)
   }
   catch(err){
    res.status(401).json(err)
   }
}