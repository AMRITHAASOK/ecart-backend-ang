require('dotenv').config()

const express = require('express')
const cors= require('cors')
require('./DB/connection')
const routes = require('./Routes/router')
//create a backend using express
const ecartServer = express()

ecartServer.use(cors())
ecartServer.use(express.json())
ecartServer.use(routes)
const PORT = 3000 || process.env.PORT

ecartServer.listen(PORT,()=>{
    console.log('ecart server listening on port'+PORT);
})

ecartServer.get('/',(req,res)=>{
    res.send('ecart server started....');
})