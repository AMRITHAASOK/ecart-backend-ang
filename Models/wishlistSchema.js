const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
      productId:{
        type:Number,
        required: true,
        unique: true
    },
    userId:{
        type:String,
        required: true
    }
})
//model creation
const wishlists = mongoose.model("wishlists",wishlistSchema)
module.exports = wishlists