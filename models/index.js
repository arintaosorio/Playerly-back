const mongoose = require('mongoose');
const usuario = require('./usuario');


const URL = 'mongodb+srv://admin:qwertyu123@cluster0-2ck8o.mongodb.net/test?retryWrites=true&w=majority'
    mongoose.connect(URL,(err)=>{
        if (!err) console.log('conexion exitosa');
        else console.log(err)
    });

module.exports ={
   usuario
}