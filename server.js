const express = require('express')
const app = express()


app.get('/', (req, res)=>{
    res.send('Ola Mundo, Ola Render')
})


app.listen(3000, ()=>{
    console.log('Servidor rodando')
})