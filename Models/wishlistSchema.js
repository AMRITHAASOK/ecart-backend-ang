const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
    id:{
        type:String,
        required: true,
        unique: true
    },
    title:{
        type:String,
        required: true,
    },
    price:{
        type:String,
        required: true, 
    },
    description:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        required: true, 
    },
    image:{
        type:String,
        required: true, 
    },
    userId:{
        type:String,
        required: true
    }
})
//model creation
const wishlists = mongoose.model("wishlists",wishlistSchema)
module.exports = wishlists