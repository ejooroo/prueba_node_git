const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.end('HOLA MUNDO!!! - NODE js');
});

const port = 8080;
    

app.listen(port);