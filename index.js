const express = require('express');
const app = express();


app.get('/', (req,res) => { 
    res.status(200).send({message:'novo repositorio'})
})


app.get('/ola', (req,res) => { 
    res.status(200).send({message:'22222'})
})

app.listen(4001, () => {

    console.log('api inicializada na porta 4001');
})
