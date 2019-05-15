const express = require('express');
const app = express();


app.get('/', (req,res) => { 
    res.status(200).send({message:'novo repositorio'})
})

app.listen(4001, () => {

    console.log('api inicializada na porta 4001');
})