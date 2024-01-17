const mongoose = require('mongoose');
const connection_string = process.env.CONNECTION_STRING;

mongoose.connect(connection_string).then((res)=>{
    console.log('Ecart is connected to mongodb');
}).catch((err)=>{
    console.log('Error connecting to mongodb: ' + err.message);
})