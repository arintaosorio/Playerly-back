const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    ciudad:{
        type: String,
        enum: ['CDMX', 'EDOMEX']
    },
    sexo:{
        type: String,
        enum: ['F', 'M']
    },
    genero:{
        type: [String],
        enum: ['ROCK', 'POP', 'REGGAE', 'METAL']
    },
   
});

const usuario = mongoose.model('usuario', UsuarioSchema);

module.exports = usuario;