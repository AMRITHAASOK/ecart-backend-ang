const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
    id:{
        type:Number,
        required: true,
    },
    title:{
        type:String,
        required: true,
    },
    price:{
        type:String,
        required: true, 
    },

    image:{
        type:String,
        required: true, 
    },
   
})
//model creation
const wishlists = mongoose.model("wishlists",wishlistSchema)
module.exports = wishlists