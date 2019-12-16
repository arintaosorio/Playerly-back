const express = require('express');
const cors = require('cors');
const { usuario } = require('./models/index'); 
const PORT = process.env.PORT;
const app = express();
app.use(cors());



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
    console.log('Server on');
});