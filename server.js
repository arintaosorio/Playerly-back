const express = require('express');
const cors = require('cors');
const { usuario } = require('./models/index'); 
const PORT = process.env.PORT;
const app = express();
app.use(cors());



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/usuario', (req, res) => {
    const newusuario = usuario(req.body);
    newusuario.save((err, usuario) => {

        err
            ? res.status(400).send(err)
            : res.status(201).send(usuario);
    })


});



app.listen(PORT, () => {
    console.log('Server on');
});